const getAngle = (one, two) => {
    const a = one[0] - two[0]
    const b = one[1] - two[1]

    return Math.atan2(-b, -a)
}

export default getAngle
