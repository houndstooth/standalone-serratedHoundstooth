const getDistance = (one, two) => {
    const a = one[0] - two[0]
    const b = one[1] - two[1]

    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

export default getDistance
