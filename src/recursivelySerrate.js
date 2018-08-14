import getDistance from './getDistance'
import rotate from './rotate'
import getAngle from './getAngle'

const recursiveOutline = [
    [0, 8], [2, 6], [2, 5], [1, 6], [0, 6], [2, 4], [3, 4], [4, 3], [4, 4], [5, 4], [4, 5], [4, 6], [6, 4], [6, 3], [7, 2], [6, 2], [8, 0]
].map(([x, y]) => [x, y - 8])

const recursivelySerrate = (outline, depth) => {
    if (depth > 3) return outline

    const output = []

    outline.forEach((coordinate, index) => {
        if (index > recursiveOutline.length - 2) return

        const nextCoordinate = index === outline.length - 1 ? outline[0] : outline[index + 1]
        const lengthOfSegment = getDistance(coordinate, nextCoordinate)

        recursivelySerrate(recursiveOutline, depth + 1).forEach(([x, y]) => {
            output.push(rotate({
                fixedPoint: coordinate,
                point: [
                    coordinate[0] + x * lengthOfSegment * Math.sqrt(2) / 16,
                    coordinate[1] + y * lengthOfSegment * Math.sqrt(2) / 16
                ],
                rotation: getAngle(coordinate, nextCoordinate) + (Math.PI / 4)
            }))
        })
    })

    return output
}

export default recursivelySerrate
