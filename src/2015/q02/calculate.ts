export const calculate = (length: number, width: number, height: number): number => {
    return calculate_detailed(length, width, height).answer
}

export const calculate_detailed = (length: number, width: number, height: number): {
    answer: number,
    sides: number[]
} => {
    const sides = [
        length * width,
        width * height,
        height * length
    ]
    return {
        answer: sides.reduce((acc, side) => acc + 2 * side, 0) + Math.min(...sides),
        sides
    }
}