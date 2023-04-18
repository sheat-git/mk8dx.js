import { Track } from '../data/mod.ts'
import { normalize } from './text.ts'

export const nicks = new Map(Track.All.flatMap(track => track.nicks.map(nick => [nick, track.id])))

export const search = (nick: string): Track | null => {
    const normalizedNick = normalize(nick)
    const trackId = nicks.get(normalizedNick)
    return trackId === undefined ? null : Track.All[trackId]
}
