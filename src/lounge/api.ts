import * as util from './util.ts'
import { LoungeApiError } from './error.ts'
import {
    Bonus,
    Leaderboard,
    LoungeApiErrorData,
    Penalty,
    Player,
    TableDetails
} from './types/mod.ts'
import { PlayerDetails } from './types/PlayerDetails.ts'

export const config = {
    baseUrl: 'https://www.mk8dx-lounge.com/api',
}

type Params = Record<string, Date | string | number | boolean | undefined>

const convertToQuery = (params: Record<string, Date | string | number | boolean | undefined>): string => {
    return Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => {
            if (value instanceof Date) {
                return `${key}=${util.convertToString(value)}`
            } else {
                return `${key}=${value}`
            }
        })
        .join('&')
}

export const get = async <Data>(path: string, params: Params): Promise<Data> => {
    const res = await fetch(`${config.baseUrl}/${path}?${convertToQuery(params)}`)
    const data = await res.json()
    if (!res.ok) {
        throw new LoungeApiError(data as LoungeApiErrorData)
    }
    return data as Data
}

export const getBonus = async (params: {
    id: string
}): Promise<Bonus> => {
    return await get<Bonus>('bonus', params)
}

export const getBonusList = async (params: {
    name: string
    season?: number
}): Promise<Bonus[]> => {
    return await get<Bonus[]>('bonus/list', params)
}

export const getPenalty = async (params: {
    id: string
}): Promise<Penalty> => {
    return await get<Penalty>('penalty', params)
}

export const getPenaltyList = async (params: {
    name: string
    isStrike?: boolean
    from?: Date
    includeDeleted?: boolean
    season?: number
}): Promise<Penalty[]> => {
    return await get<Penalty[]>('penalty/list', params)
}

export const getPlayer = async (params: {
    name?: string
    id?: number
    mkcId?: number
    discordId?: string
    fc?: string
    season?: number
}): Promise<Player> => {
    return await get<Player>('player', params)
}

export const getPlayerDetails = async (params: {
    name?: string
    id?: number
    season?: number
}): Promise<PlayerDetails> => {
    return await get<PlayerDetails>('player/details', params)
}

export const getPlayerList = async (params: {
    minMmr?: number
    maxMmr?: number
    season?: number
}): Promise<Player[]> => {
    return await get<Player[]>('player/list', params)
}

export const getPlayerLeaderboard = async (params: {
    season: number
    sortBy?: 'Name' | 'Mmr' | 'MaxMmr' | 'WinRate' | 'WinLossLast10' | 'GainLast10' | 'EventsPlayed' | 'LargestGain' | 'LargestLoss'
    skip?: number
    pageSize?: number
    search?: string
    country?: string
    minMmr?: number
    maxMmr?: number
    minEventsPlayed?: number
    maxEventsPlayed?: number
}): Promise<Leaderboard> => {
    return await get<Leaderboard>('player/leaderboard', params)
}

export const getTable = async (params: {
    tableId: number
}): Promise<TableDetails> => {
    return await get<TableDetails>('table', params)
}

export const getTableList = async (params: {
    from: Date
    to?: Date
    season?: number
}): Promise<TableDetails[]> => {
    return await get<TableDetails[]>('table/list', params)
}

export const getTableUnverified = async (params: {
    season?: number
}): Promise<TableDetails[]> => {
    return await get<TableDetails[]>('table/unverified', params)
}
