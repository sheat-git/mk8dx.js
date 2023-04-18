// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/BonusViewModel.cs
export type Bonus = {
    id: number
    season: number
    awardedOn: string
    prevMmr: number
    newMmr: number
    amount: number
    deletedOn?: string
    playerId: number
    playerName: string
}
