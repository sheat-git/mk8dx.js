# mk8dx.js
This library has mk8dx's track data and lounge api wrapper.

## Track Data

```TypeScript
import { searchTrack } from 'mk8dx'

console.log(searchTrack('tokyo').abbr)
// 'bTB'
```

## Lounge API Wrapper

```TypeScript
import { Lounge } from 'mk8dx'

Lounge.getPlayer({ name: 'sheat' })
    .then(player => {
        console.log(player.switchFc)
        // '6986-4603-1885'
    })
```

## Lounge Chart

```TypeScript
import { Chart } from 'chart.js'
import { createCanvas } from '@napi-rs/canvas'
import fs from 'fs'
import { Lounge } from 'mk8dx'

const playerDetails = await Lounge.getPlayerDetails({ name: 'kusaan', season: 7 })
const canvas = createCanvas(1280, 720)
new Chart(canvas.getContext('2d'), Lounge.createStatsChartConfig({
    season: playerDetails.season,
    data: Lounge.createStatsChartData(playerDetails.mmrChanges)
}))
fs.writeFile('stats.png', canvas.toBuffer('image/png'))
```

![](stats.png)
