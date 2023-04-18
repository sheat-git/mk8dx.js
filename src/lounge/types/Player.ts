// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/PlayerViewModel.cs
export type Player = {
    id: number
    name: string
    mkcId: number
    registryId?: number
    discordId?: string
    countryCode?: string
    switchFc?: string
    isHidden: boolean
    mmr?: number
    maxMmr?: number
}
