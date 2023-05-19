import { Division } from '../types/Division.ts'

export class DivisionForChart {
    readonly type: Division
    readonly color: number

    private constructor(options: {
        type: Division
        color: number
    }) {
        this.type = options.type
        this.color = options.color
    }

    get hexColor(): string {
        return `#${this.color.toString(16).padStart(6, '0')}`
    }

    static readonly Grandmaster = new DivisionForChart({
        type: 'Grandmaster',
        color: 0xa3022c
    })
    static readonly Master = new DivisionForChart({
        type: 'Master',
        color: 0x9370db
    })
    static readonly Diamond = new DivisionForChart({
        type: 'Diamond',
        color: 0xb9f2ff
    })
    static readonly Ruby = new DivisionForChart({
        type: 'Ruby',
        color: 0xd51c5e
    })
    static readonly Sapphire = new DivisionForChart({
        type: 'Sapphire',
        color: 0x286cd3
    })
    static readonly Platinum = new DivisionForChart({
        type: 'Platinum',
        color: 0x3fabb8
    })
    static readonly Gold = new DivisionForChart({
        type: 'Gold',
        color: 0xf1c232
    })
    static readonly Silver = new DivisionForChart({
        type: 'Silver',
        color: 0xcccccc
    })
    static readonly Bronze = new DivisionForChart({
        type: 'Bronze',
        color: 0xb45f06
    })
    static readonly Iron = new DivisionForChart({
        type: 'Iron',
        color: 0x817876
    })
}

export type Rank = {
    division: DivisionForChart
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

    getDivision(mmr: number): DivisionForChart {
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
                    division: DivisionForChart.Grandmaster,
                    minMmr: 17000
                },
                {
                    division: DivisionForChart.Master,
                    minMmr: 16000
                },
                {
                    division: DivisionForChart.Diamond,
                    borderMmr: 15000,
                    minMmr: 14000
                },
                {
                    division: DivisionForChart.Ruby,
                    borderMmr: 13000,
                    minMmr: 12000
                },
                {
                    division: DivisionForChart.Sapphire,
                    borderMmr: 11000,
                    minMmr: 10000
                },
                {
                    division: DivisionForChart.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: DivisionForChart.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: DivisionForChart.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: DivisionForChart.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: DivisionForChart.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        7: {
            ranks: [
                {
                    division: DivisionForChart.Grandmaster,
                    minMmr: 15000
                },
                {
                    division: DivisionForChart.Master,
                    minMmr: 14000
                },
                {
                    division: DivisionForChart.Diamond,
                    borderMmr: 13000,
                    minMmr: 12000
                },
                {
                    division: DivisionForChart.Sapphire,
                    borderMmr: 11000,
                    minMmr: 10000
                },
                {
                    division: DivisionForChart.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: DivisionForChart.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: DivisionForChart.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: DivisionForChart.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: DivisionForChart.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        6: {
            ranks: [
                {
                    division: DivisionForChart.Grandmaster,
                    minMmr: 15000
                },
                {
                    division: DivisionForChart.Master,
                    minMmr: 14000
                },
                {
                    division: DivisionForChart.Diamond,
                    borderMmr: 13000,
                    minMmr: 12000
                },
                {
                    division: DivisionForChart.Sapphire,
                    borderMmr: 11000,
                    minMmr: 10000
                },
                {
                    division: DivisionForChart.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: DivisionForChart.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: DivisionForChart.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: DivisionForChart.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: DivisionForChart.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        5: {
            ranks: [
                {
                    division: DivisionForChart.Grandmaster,
                    minMmr: 14000
                },
                {
                    division: DivisionForChart.Master,
                    minMmr: 13000
                },
                {
                    division: DivisionForChart.Diamond,
                    borderMmr: 12000,
                    minMmr: 11000
                },
                {
                    division: DivisionForChart.Sapphire,
                    minMmr: 10000
                },
                {
                    division: DivisionForChart.Platinum,
                    borderMmr: 9000,
                    minMmr: 8000
                },
                {
                    division: DivisionForChart.Gold,
                    borderMmr: 7000,
                    minMmr: 6000
                },
                {
                    division: DivisionForChart.Silver,
                    borderMmr: 5000,
                    minMmr: 4000
                },
                {
                    division: DivisionForChart.Bronze,
                    borderMmr: 3000,
                    minMmr: 2000
                },
                {
                    division: DivisionForChart.Iron,
                    borderMmr: 1000,
                    minMmr: 0
                }
            ]
        },
        4: {
            ranks: [
                {
                    division: DivisionForChart.Grandmaster,
                    minMmr: 14500
                },
                {
                    division: DivisionForChart.Master,
                    minMmr: 13000
                },
                {
                    division: DivisionForChart.Diamond,
                    minMmr: 11500
                },
                {
                    division: DivisionForChart.Sapphire,
                    minMmr: 10000
                },
                {
                    division: DivisionForChart.Platinum,
                    minMmr: 8500
                },
                {
                    division: DivisionForChart.Gold,
                    minMmr: 7000
                },
                {
                    division: DivisionForChart.Silver,
                    minMmr: 5500
                },
                {
                    division: DivisionForChart.Bronze,
                    minMmr: 4000
                },
                {
                    division: DivisionForChart.Iron,
                    borderMmr: 2000,
                    minMmr: 0
                }
            ]
        }
    }).map(([season, options]) => [season, new Season(options)]))
}

export const nowSeason = Object.keys(Season.All).map(Number).sort((a, b) => b - a)[0]
