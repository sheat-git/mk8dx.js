# mk8dx.js
This library has mk8dx's track data and lounge api wrapper.

## Track Data

```TypeScript
import { search } from 'mk8dx/util/track'

console.log(search('tokyo').abbr)
// 'bTB'
```

## Lounge API Wrapper

```TypeScript
import { getPlayer } from 'mk8dx/lounge'

getPlayer({ name: 'sheat' })
    .then(player => {
        console.log(player.switchFc)
        // '6986-4603-1885'
    })
```
