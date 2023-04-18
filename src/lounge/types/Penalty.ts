// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/PenaltyViewModel.cs

export type Penalty = {
    id: string
    season: number
    awardedOn: string
    isStrike: boolean
    prevMmr: number
    newMmr: number
    amount: number
    deletedOn: string
    playerId?: string
    plyaerName: string
}