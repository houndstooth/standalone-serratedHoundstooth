import recursivelySerrate from './recursivelySerrate'

const SCALE = 200
const canvas = document.createElement('canvas')
canvas.width = 5 * SCALE
canvas.height = 5 * SCALE
document.body.appendChild(canvas)
const context = canvas.getContext('2d')

const houndstoothOutline = [
    [2, 1], [3, 1], [4, 0], [4, 1], [5, 1], [4, 2], [4, 3], [2, 5], [2, 4], [3, 3], [2, 3], [2, 2], [1, 3], [0, 3],
]

const outlineToRender = recursivelySerrate(houndstoothOutline, 0).map(([x, y]) => [x * SCALE, y * SCALE])

context.fillStyle = 'black'
context.beginPath()
context.moveTo(...outlineToRender[0])
outlineToRender.slice(1).forEach(coordinate => context.lineTo(...coordinate))
context.closePath()
context.fill()
