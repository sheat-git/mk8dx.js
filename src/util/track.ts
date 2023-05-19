import { Track } from '../data/mod.ts'
import { normalize } from './text.ts'

export const trackNicks = new Map(Track.All.flatMap(track => track.nicks.map(nick => [nick, track.id])))

export const searchTrack = (nick: string): Track | null => {
    const normalizedNick = normalize(nick)
    const trackId = trackNicks.get(normalizedNick)
    return trackId === undefined ? null : Track.All[trackId]
}
