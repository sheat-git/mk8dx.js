// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/PlayerDetailsViewModel.cs
export type PlayerDetails = {
    playerId: number
    name: string
    mkcId: number
    registryId?: number
    countryCode?: string
    countryName?: string
    switchFc?: string
    isHidden: boolean
    season: number
    mmr?: number
    maxMmr?: number
    overallRank?: number
    eventsPlayed: number
    winRate?: number
    winsLastTen: number
    lossesLastTen: number
    winLossLastTen: string
    gainLossLastTen?: number
    largestGain?: number
    largestGainTableId?: number
    largestLoss?: number
    largestLossTableId?: number
    averageScore?: number
    averageLastTen?: number
    partnerAverage?: number
    mmrChanges: MmrChange[]
    nameHistory: NameChange[]
    rank: string
    forumLink: string
    registryLink?: string
}

export type MmrChange = {
    changeId?: number
    newMmr: number
    mmrDelta: number
    reason: MmrChangeReason
    time: string
    score?: number
    partnerScores?: number[]
    partnerIds?: number[]
    rank?: number
    tier?: string
    numTeams?: number
}

export type MmrChangeReason =
    'Placement' |
    'Table' |
    'Penalty' |
    'Strike' |
    'Bonus' |
    'TableDelete' |
    'PenaltyDelete' |
    'StrikeDelete' |
    'BonusDelete'

export type NameChange = {
    name: string
    changedOn: string
}
