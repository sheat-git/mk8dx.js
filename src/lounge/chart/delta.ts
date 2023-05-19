import { ChartConfiguration } from 'npm:chart.js'
import { LoungeChartError } from './error.ts'
import { checkerBackgroundPlugin, hDivisionColorPlugin } from './plugins.ts'

export type LoungeChartDeltaOptions = {
    season: number
    data: {
        newMmr: number
        mmrDelta: number
    }[]
    setBackground?: boolean
}

export const createLoungeChartDeltaConfig = (options: LoungeChartDeltaOptions): ChartConfiguration => {
    if (options.data.length === 0) {
        throw LoungeChartError.noData()
    }
    return {
        type: 'line',
        data: {
            labels: [...Array(options.data.length + 1)].map((_, i) => i),
            datasets: [{
                xAxisID: 'x',
                yAxisID: 'y',
                borderJoinStyle: 'round',
                borderColor: 'white',
                pointStyle: false,
                fill: {
                    target: 'origin',
                    above: 'rgba(0, 255, 0, 0.2)',
                    below: 'rgba(255, 0, 0, 0.2)'
                },
                data: options.data.reduce((acc, cur) => {
                    acc.push(acc[acc.length - 1] + cur.mmrDelta)
                    return acc
                }, [0]),
            }]
        },
        options: {
            scales: {
                x: {
                    min: 0,
                    max: options.data.length,
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                // @ts-expect-error: options for hDivisionColor
                hDivisionColor: {
                    season: options.season,
                    baseMmr: options.data[0].newMmr - options.data[0].mmrDelta,
                    newMmrs: options.data.map(d => d.newMmr)
                }
            }
        },
        plugins: [
            ...(
                options.setBackground
                    ? [checkerBackgroundPlugin]
                    : []
            ),
            hDivisionColorPlugin
        ]
    }
}
