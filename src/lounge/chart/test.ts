import { Chart, registerables } from 'npm:chart.js'
import { createCanvas } from 'npm:canvas'
import { getPlayerDetails } from '../api.ts'
import { createStatsChartConfig, createStatsChartData } from './stats.ts'
import { createDeltaChartConfig } from './delta.ts'

Chart.register(...registerables)
Chart.defaults.animation = false
Chart.defaults.responsive = false
Chart.defaults.font.size = 24
Chart.defaults.layout.padding = 20

Deno.test('stats', async () => {
    const details = await getPlayerDetails({ name: 'sheat', season: 8 })
    const canvas = createCanvas(1280, 720)
    new Chart(canvas.getContext('2d'), createStatsChartConfig({
        data: createStatsChartData(details.mmrChanges.reverse()),
        season: details.season
    }))
    // await Deno.writeFile('stats.png', canvas.toBuffer('image/png'))
})

Deno.test('delta', async () => {
    const details = await getPlayerDetails({ name: 'sheat', season: 8 })
    const tableDeleteIds = new Set(details.mmrChanges.filter(mmrChange => mmrChange.reason === 'TableDelete').map(mmrChange => mmrChange.changeId!))
    const canvas = createCanvas(1280, 720)
    new Chart(canvas.getContext('2d'), createDeltaChartConfig({
        data: details.mmrChanges.reverse().filter(mmrChange => mmrChange.numTeams === 6 && !tableDeleteIds.has(mmrChange.changeId!)),
        season: details.season
    }))
    // await Deno.writeFile('delta.png', canvas.toBuffer('image/png'))
})
