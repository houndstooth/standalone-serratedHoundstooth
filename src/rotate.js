const rotate = ({fixedPoint, point, rotation}) => {
    const sin = Math.sin(rotation)
    const cos = Math.cos(rotation)

    const pointX = fixedPoint[0]
    const pointY = fixedPoint[1]

    const relativeX = point[0] - pointX
    const relativeY = point[1] - pointY

    return [
        pointX + relativeX * cos - relativeY * sin,
        pointY + relativeX * sin + relativeY * cos,
    ]
}

export default rotate
