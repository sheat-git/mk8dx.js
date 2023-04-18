import consoles from './consoles.json' assert { type: 'json' }
import cups from './cups.json' assert { type: 'json' }
import tracks from './tracks.json' assert { type: 'json' }

type ConsoleData = typeof consoles[number]
type CupData = typeof cups[number]
type TrackData = typeof tracks[number]

export type Lang = 'ja' | undefined

export class Console {
    readonly id: number
    readonly name: string
    readonly nameJa: string
    readonly abbr: string
    readonly abbrJa: string

    private constructor(data: ConsoleData) {
        this.id = data.id
        this.name = data.name
        this.nameJa = data.nameJa
        this.abbr = data.abbr
        this.abbrJa = data.abbrJa
    }

    static readonly All = consoles.map(data => new Console(data))

    getName(lang: Lang): string {
        switch (lang) {
        case 'ja':
            return this.nameJa
        default:
            return this.name
        }
    }

    getAbbr(lang: Lang): string {
        switch (lang) {
        case 'ja':
            return this.abbrJa
        default:
            return this.abbr
        }
    }
}

export class Cup {
    readonly id: number
    readonly name: string
    readonly nameJa: string

    private constructor(data: CupData) {
        this.id = data.id
        this.name = data.name
        this.nameJa = data.nameJa
    }

    static readonly All = cups.map(data => new Cup(data))

    get tracks(): Track[] {
        const firstTrackId = this.id * 4
        return Track.All.slice(firstTrackId, firstTrackId + 4)
    }

    getName(lang: Lang): string {
        switch (lang) {
        case 'ja':
            return this.nameJa
        default:
            return this.name
        }
    }
}

export class Track {
    readonly id: number
    readonly name: string
    readonly nameJa: string
    readonly abbr: string
    readonly abbrJa: string
    readonly nicks: string[]
    readonly console: Console | null

    private constructor(data: TrackData) {
        this.id = data.id
        this.name = data.name
        this.nameJa = data.nameJa
        this.abbr = data.abbr
        this.abbrJa = data.abbrJa
        this.nicks = data.nicks
        this.console = data.consoleId === undefined ? null : Console.All[data.consoleId]
    }

    static readonly All = tracks.map(data => new Track(data))

    get cup(): Cup {
        return Cup.All[Math.floor(this.id / 4)]
    }

    get fullName(): string {
        if (this.console === null) {
            return this.name
        }
        return `${this.console.abbr} ${this.name}`
    }

    get fullNameJa(): string {
        if (this.console === null) {
            return this.nameJa
        }
        return `${this.console.abbrJa} ${this.nameJa}`
    }

    getName(lang: Lang): string {
        switch (lang) {
        case 'ja':
            return this.nameJa
        default:
            return this.name
        }
    }

    getAbbr(lang: Lang): string {
        switch (lang) {
        case 'ja':
            return this.abbrJa
        default:
            return this.abbr
        }
    }

    getFullName(lang: Lang): string {
        switch (lang) {
        case 'ja':
            return this.fullNameJa
        default:
            return this.fullName
        }
    }
}
