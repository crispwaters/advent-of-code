export const calculate = (length: number, width: number, height: number): number => {
    return calculate_detailed(length, width, height).answer
}

export const calculate_detailed = (length: number, width: number, height: number): {
    answer: number,
    sides: number[]
} => {
    const sortedSides = [length, width, height].sort((a, b) => a - b)
    const [shortest, middle, longest] = sortedSides
    // console.debug({shortest, middle, longest})
    const wrapLength = (2 * shortest) + (2 * middle)
    const bowLength = shortest * middle * longest
    return { answer: wrapLength + bowLength, sides: sortedSides }
}