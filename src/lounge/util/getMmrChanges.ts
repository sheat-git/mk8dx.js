import { TableDetails, TableScore, Team } from '../types/TableDetails.ts'

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



export const expectMmrDeltas = (options: {
    otherMmrs: number[]
    mmr: number
}) => {
    const ascendingMmrs = options.otherMmrs.sort((a, b) => a - b)
    const deascendingMmrs = [...ascendingMmrs].reverse()
    const numTeams = options.otherMmrs.length + 1

    const cap = caps[numTeams]
    const scalingFactor = scalingFactors[numTeams]
    const offset = offsets[numTeams]

    const getMmrDelta = (winnerMmr: number, loserMmr: number) =>
        cap / (1 + Math.pow(11, (offset + winnerMmr - loserMmr) / scalingFactor))
    const getMmrDeltaWithMmrs = (mmr: number, tops: number[], bottoms: number[]) => {
        let delta = 0
        for (const top of tops) {
            delta -= getMmrDelta(top, mmr)
        }
        for (const bottom of bottoms) {
            delta += getMmrDelta(mmr, bottom)
        }
        return Math.round(delta)
    }

    return [...Array(numTeams)].map((_, i) => ({
        min: getMmrDeltaWithMmrs(options.mmr, ascendingMmrs.slice(0, i), ascendingMmrs.slice(i)),
        max: getMmrDeltaWithMmrs(options.mmr, deascendingMmrs.slice(0, i), deascendingMmrs.slice(i))
    }))
}

export const getMmrDeltas = (teams: {
    rank: number
    averageMmr: number
}[]) => {
    const cap = caps[teams.length]
    const scalingFactor = scalingFactors[teams.length]
    const offset = offsets[teams.length]

    const getMmrDelta = (winnerMmr: number, loserMmr: number) =>
        cap / (1 + Math.pow(11, (offset + winnerMmr - loserMmr) / scalingFactor))
    const getTiedMmrDelta = (mmrDif: number) => // mmrDif >= 0
        cap / (1 + Math.pow(11, (offset - mmrDif) / scalingFactor)) - cap / 3

    return teams.map((team, i) => {
        let delta = 0
        for (let j = 0; j < teams.length; j++) {
            if (i === j) continue
            const otherTeam = teams[j]
            if (team.rank === otherTeam.rank) {
                if (team.averageMmr < otherTeam.averageMmr) {
                    delta += getTiedMmrDelta(otherTeam.averageMmr - team.averageMmr)
                } else {
                    delta -= getTiedMmrDelta(team.averageMmr - otherTeam.averageMmr)
                }
            } else if (team.rank < otherTeam.rank) {
                delta += getMmrDelta(team.averageMmr, otherTeam.averageMmr)
            } else {
                delta -= getMmrDelta(otherTeam.averageMmr, team.averageMmr)
            }
        }
        return delta
    })
}

type Replace<T, K extends keyof T, V> = Omit<T, K> & Record<K, V>

type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type ExpectedTableDetails = Replace<TableDetails, 'teams', ExpectedTeam[]>

export type ExpectedTeam = Replace<Team, 'scores', ExpectedTableScore[]>

export type ExpectedTableScore = PartiallyRequired<TableScore, 'prevMmr' | 'newMmr' | 'delta'>

export const expectTableDetails = (table: TableDetails) => {
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

    const deltas = getMmrDeltas(newTable.teams.map(team => ({
        rank: team.rank,
        averageMmr: team.scores.reduce((sum, score) => sum + score.prevMmr!, 0) / team.scores.length
    })))
    for (let i = 0; i < newTable.numTeams; i++) {
        const team = newTable.teams[i]
        for (const score of team.scores) {
            const delta = Math.round(deltas[i] * score.multiplier)
            score.newMmr = score.prevMmr! + delta
            score.delta = delta
        }
    }

    return newTable as ExpectedTableDetails
}
