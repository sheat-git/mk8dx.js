import { ChartConfiguration } from 'npm:chart.js'
import { checkerBackground, vDivisionColor } from './plugins.ts'
import { MmrChange } from '../types/PlayerDetails.ts'

export type StatsOptions = {
    season: number
    data: {
        mmrs: number[]
    }[]
}

export const createStatsData = (mmrChanges: MmrChange[]): StatsOptions['data'] => {
    if (mmrChanges.length === 0) return []
    const tableDeleteIds = new Set(mmrChanges.filter(mmrChange => mmrChange.reason === 'TableDelete').map(mmrChange => mmrChange.changeId))
    const baseMmr = mmrChanges[0].newMmr - mmrChanges[0].mmrDelta
    const data = [{ mmrs: [baseMmr] }]
    for (const mmrChange of mmrChanges) {
        if (mmrChange.reason === 'Placement') {
            continue
        } else if (mmrChange.reason === 'Table' && !tableDeleteIds.has(mmrChange.changeId)) {
            data.push({ mmrs: [mmrChange.newMmr] })
        } else {
            data[data.length - 1].mmrs.push(mmrChange.newMmr)
        }
    }
    return data
}

export const createStatsConfig = (options: StatsOptions): ChartConfiguration => {
    return {
        type: 'scatter',
        data: {
            datasets: [{
                xAxisID: 'x',
                yAxisID: 'mmr',
                showLine: true,
                borderJoinStyle: 'round',
                borderColor: 'white',
                pointStyle: false,
                fill: 'end',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                data: options.data.flatMap((d, i) => d.mmrs.map((mmr, j) => {
                    return {
                        x: i + j / d.mmrs.length,
                        y: mmr
                    }
                }))
            }]
        },
        options: {
            scales: {
                x: {
                    min: 0,
                    max: options.data.length - 1,
                    ticks: {
                        color: 'white',
                        callback: value => {
                            if (Number.isInteger(value)) {
                                return value
                            } else {
                                return ''
                            }
                        }
                    }
                },
                mmr: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                // @ts-expect-error: options for vDivisionColor
                vDivisionColor: {
                    season: options.season
                }
            }
        },
        plugins: [
            checkerBackground,
            vDivisionColor
        ]
    }
}
