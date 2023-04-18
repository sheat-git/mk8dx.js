import { Rank } from './Rank.ts'

// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/LeaderboardViewModel.cs
export type Leaderboard = {
    totalPlayers: number
    data: {
        id: number
        overallRank?: number
        countryCode?: string
        name: string
        mmr?: number
        maxMmr?: number
        winRate?: number
        winsLastTen: number
        lossesLastTen: number
        gainLossLastTen?: number
        eventsPlayed: number
        largestGain?: number
        largestLoss?: number
        mmrRank?: Rank
        maxMmrRank?: Rank
    }[]
}
