// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/TableDetailsViewModel.cs
export type TableDetails = {
    id: number
    season: number
    createdOn: string
    verifiedOn?: string
    deletedOn?: string
    numTeams: number
    format: string
    url: string
    tier: string
    teams: Team[]
    tableMessageId?: string
    updateMessageId?: string
    authorId?: string
}

export type Team = {
    rank: number
    scores: TableScore[]
}

export type TableScore = {
    score: number
    multiplier: number
    prevMmr?: number
    newMmr?: number
    delta?: number
    playerId: number
    playerName: string
    playerDiscordId?: string
    playerCountryCode?: string
    isNewPeakMmr?: boolean
}
