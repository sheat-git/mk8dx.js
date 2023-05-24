import { Plugin } from 'npm:chart.js'
import { createCanvas } from 'npm:canvas'
import { Season } from './types.ts'

export const vDivisionColorPlugin: Plugin = {
    id: 'vDivisionColor',
    beforeDraw: (chart, _, options) => {
        const { ctx } = chart
        const xScale = chart.scales['x']
        const mmrScale = chart.scales['mmr']
        const borderColor = options.borderColor ?? 'black'
        const borderWidth = options.borderWidth ?? chart.options.scales?.mmr?.grid?.lineWidth ?? 1
        const season = Season.get(options.season)
        ctx.save()
        let topMmr = mmrScale.max
        let top = mmrScale.top
        for (const rank of season.ranks) {
            if (rank.minMmr > topMmr) continue
            if (topMmr < mmrScale.min) break
            const bottom = rank.minMmr > mmrScale.min ? mmrScale.getPixelForValue(rank.minMmr) : mmrScale.bottom
            ctx.fillStyle = rank.division.hexColor
            ctx.fillRect(xScale.left, top, xScale.width, bottom - top)
            if (rank.borderMmr && rank.borderMmr > mmrScale.min) {
                const border = mmrScale.getPixelForValue(rank.borderMmr)
                ctx.beginPath()
                ctx.moveTo(xScale.left, border)
                ctx.lineTo(xScale.right, border)
                ctx.strokeStyle = borderColor
                ctx.lineWidth = borderWidth
                ctx.stroke()
            }
            topMmr = rank.minMmr
            top = bottom
        }
        ctx.restore()
    }
}

export const hDivisionColorPlugin: Plugin = {
    id: 'hDivisionColor',
    beforeDraw: (chart, _, options) => {
        const { ctx } = chart
        const xScale = chart.scales['x']
        const yScale = chart.scales['y']
        const season = Season.get(options.season)
        ctx.save()
        let prevDivision = season.getDivision(options.baseMmr)
        let left = xScale.left
        for (let i = 0; i < options.newMmrs.length; i++) {
            const newDivision = season.getDivision(options.newMmrs[i])
            if (prevDivision === newDivision) continue
            const right = (xScale.getPixelForValue(i) + xScale.getPixelForValue(i + 1)) / 2
            ctx.fillStyle = prevDivision.hexColor
            ctx.fillRect(left, yScale.top, right - left, yScale.height)
            prevDivision = newDivision
            left = right
        }
        ctx.fillStyle = prevDivision.hexColor
        ctx.fillRect(left, yScale.top, xScale.right - left, yScale.height)
        ctx.restore()
    }
}

export const checkerBackgroundPlugin: Plugin = {
    id: 'checkerBackground',
    beforeDraw: (chart, _ , options) => {
        const { ctx } = chart
        const width = (options.width ?? 32) as number
        const height = (options.height ?? 32) as number
        const bgCanvas = createCanvas(width * 2, height * 2)
        const bgCtx = bgCanvas.getContext('2d')
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                bgCtx.fillStyle = i === j ? '#131313' : '#000000'
                bgCtx.fillRect(i * width, j * height, width, height)
            }
        }
        ctx.save()
        const pattern = ctx.createPattern(bgCanvas, 'repeat')
        ctx.fillStyle = pattern
        ctx.fillRect(0, 0, chart.width, chart.height)
        ctx.restore()
    }
}
