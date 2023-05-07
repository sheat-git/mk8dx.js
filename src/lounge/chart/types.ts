import { Division as DivistionType } from '../types/Division.ts'

export class Division {
    readonly type: DivistionType
    readonly color: number

    private constructor(options: {
        type: DivistionType
        color: number
    }) {
        this.type = options.type
        this.color = options.color
    }

    get hexColor(): string {
        return `#${this.color.toString(16).padStart(6, '0')}`
    }

    static readonly Grandmaster = new Division({
        type: 'Grandmaster',
        color: 0xa3022c
    })
    static readonly Master = new Division({
        type: 'Master',
        color: 0x9370db
    })
    static readonly Diamond = new Division({
        type: 'Diamond',
        color: 0xb9f2ff
    })
    static readonly Ruby = new Division({
        type: 'Ruby',
        color: 0xd51c5e
    })
    static readonly Sapphire = new Division({
        type: 'Sapphire',
        color: 0x286cd3
    })
    static readonly Platinum = new Division({
        type: 'Platinum',
        color: 0x3fabb8
    })
    static readonly Gold = new Division({
        type: 'Gold',
        color: 0xf1c232
    })
    static readonly Silver = new Division({
        type: 'Silver',
        color: 0xcccccc
    })
    static readonly Bronze = new Division({
        type: 'Bronze',
        color: 0xb45f06
    })
    static readonly Iron = new Division({
        type: 'Iron',
        color: 0x817876
    })
}

export type Rank = {
    division: Division
    borderMmr?: number
    minMmr: number
}

export class Season {
    readonly ranks: Rank[]

    private constructor(options: {
        ranks: Rank[]
    }) {
        this.ranks = options.ranks
    }

    getDivision(mmr: number): Division {
        for (const rank of this.ranks) {
            if (rank.minMmr <= mmr) {
                return rank.division
            }
        }
        return this.ranks[this.ranks.length - 1].division
    }

    static get(season: number): Season {
        if (Object.hasOwn(Season.All, season)) {
            return Season.All[season]
        } else {
            return Object.values(Season.All)[0]
        }
    }

    static readonly All = Object.fromEntries(Object.entries({
        8: {
            ranks: [
                {
                    division: Division.Grandmaster,
                    minMmr: 17000
                },
                {
                    division: Division.Master,
                    minMmr: 16000
                },
                {
                    division: Division.Diamond,
                    borderMmr: 15000,
                    minMmr: 14000
                },
                {
                    division: Division.Ruby,
                    borderMmr: 13000,
                    minMmr: 12000
                },
                {
                    division: Division.Sapphire,
                    borderMmr: 11000,
                    minMmr: 10000
                },
                {
                    division: Division.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: Division.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: Division.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: Division.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: Division.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        7: {
            ranks: [
                {
                    division: Division.Grandmaster,
                    minMmr: 15000
                },
                {
                    division: Division.Master,
                    minMmr: 14000
                },
                {
                    division: Division.Diamond,
                    borderMmr: 13000,
                    minMmr: 12000
                },
                {
                    division: Division.Sapphire,
                    borderMmr: 11000,
                    minMmr: 10000
                },
                {
                    division: Division.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: Division.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: Division.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: Division.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: Division.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        6: {
            ranks: [
                {
                    division: Division.Grandmaster,
                    minMmr: 15000
                },
                {
                    division: Division.Master,
                    minMmr: 14000
                },
                {
                    division: Division.Diamond,
                    borderMmr: 13000,
                    minMmr: 12000
                },
                {
                    division: Division.Sapphire,
                    borderMmr: 11000,
                    minMmr: 10000
                },
                {
                    division: Division.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: Division.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: Division.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: Division.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: Division.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        5: {
            ranks: [
                {
                    division: Division.Grandmaster,
                    minMmr: 14000
                },
                {
                    division: Division.Master,
                    minMmr: 13000
                },
                {
                    division: Division.Diamond,
                    borderMmr: 12000,
                    minMmr: 11000
                },
                {
                    division: Division.Sapphire,
                    minMmr: 10000
                },
                {
                    division: Division.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: Division.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: Division.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: Division.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: Division.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        4: {
            ranks: [
                {
                    division: Division.Grandmaster,
                    minMmr: 14500
                },
                {
                    division: Division.Master,
                    minMmr: 13000
                },
                {
                    division: Division.Diamond,
                    minMmr: 11500
                },
                {
                    division: Division.Sapphire,
                    minMmr: 10000
                },
                {
                    division: Division.Platinum,
                    minMmr: 8500
                },
                {
                    division: Division.Gold,
                    minMmr: 7000
                },
                {
                    division: Division.Silver,
                    minMmr: 5500
                },
                {
                    division: Division.Bronze,
                    minMmr: 4000
                },
                {
                    division: Division.Iron,
                    borderMmr: 2000,
                    minMmr: 0
                }
            ]
        }
    }).map(([season, options]) => [season, new Season(options)]))
}
