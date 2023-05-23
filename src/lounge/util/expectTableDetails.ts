import { TableDetails, TableScore, Team } from '../types/TableDetails.ts'

type Replace<T, K extends keyof T, V> = Omit<T, K> & Record<K, V>

type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type ExpectedTableDetails = Replace<TableDetails, 'teams', ExpectedTeam[]>

export type ExpectedTeam = Replace<Team, 'scores', ExpectedTableScore[]>

export type ExpectedTableScore = PartiallyRequired<TableScore, 'prevMmr' | 'newMmr' | 'delta'>

type Const = { [numTeams: number]: number }
const caps: Const = {
    12: 60,
    6: 120,
    4: 180,
    3: 240,
    2: 300
}
const scalingFactors: Const = {
    12: 9500,
    6: 5500,
    4: 5100,
    3: 4800,
    2: 4650
}
const offsets: Const = {
    12: 2746.116,
    6: 1589.856,
    4: 1474.230,
    3: 1387.511,
    2: 1344.151
}

const getPlaces = (scores: number[]) => {
    const places = Array<number>(scores.length)
    let prevScore = -1
    let prevPlace = 0
    let place = 1
    for (const { score, i } of scores.map((score, i) => ({ score, i })).sort((a, b) => b.score - a.score)) {
        const curPlace = score === prevScore ? prevPlace : place
        places[i] = curPlace
        prevScore = score
        prevPlace = curPlace
        place++
    }
    return places
}

export const expectTableDetails = (table: TableDetails) => {
    const numTeams = table.numTeams
    const newTable = Object.assign({}, table)
    for (const team of newTable.teams) {
        for (const score of team.scores) {
            if (score.prevMmr === undefined) {
                if (score.score >= 130) score.prevMmr = 4500
                else if (score.score >= 115) score.prevMmr = 3500
                else if (score.score >= 100) score.prevMmr = 2500
                else score.prevMmr = 1500
            }
        }
    }

    const places = getPlaces(table.teams.map(team => team.scores.reduce((sum, score) => sum + score.score, 0)))
    const averageMmrs = newTable.teams.map(team => team.scores.reduce((sum, score) => sum + score.prevMmr!, 0) / team.scores.length)

    const cap = caps[numTeams]
    const scalingFactor = scalingFactors[numTeams]
    const offset = offsets[numTeams]

    const getTeamMmrDeltaWhenWinner = (winnerMmr: number, loserMmr: number) => {
        return cap / (1 + Math.pow(11, (winnerMmr - loserMmr + offset) / scalingFactor))
    }
    const getTeamMmrDeltaWhenTied = (mmr1: number, mmr2: number) => {
        return cap / (1 + Math.pow(11, - (Math.abs(mmr1 - mmr2) - offset) / scalingFactor)) - cap / 3
    }
    const getTeamMmrDelta = (team: number) => {
        const averageMmr = averageMmrs[team]
        const place = places[team]
        let total = 0
        for (let otherTeam = 0; otherTeam < numTeams; otherTeam++) {
            if (team === otherTeam) continue
            const otherAverageMmr = averageMmrs[otherTeam]
            const otherPlace = places[otherTeam]
            if (place === otherPlace) total += (averageMmr < otherAverageMmr ? 1 : -1) * getTeamMmrDeltaWhenTied(averageMmr, otherAverageMmr)
            else if (place < otherPlace) total += getTeamMmrDeltaWhenWinner(averageMmr, otherAverageMmr)
            else total -= getTeamMmrDeltaWhenWinner(otherAverageMmr, averageMmr)
        }
        return Math.round(total)
    }

    for (let i = 0; i < numTeams; i++) {
        const delta = getTeamMmrDelta(i)
        for (const score of newTable.teams[i].scores) {
            score.delta = delta
            score.newMmr = score.prevMmr! + delta
        }
    }

    return newTable as ExpectedTableDetails
}
