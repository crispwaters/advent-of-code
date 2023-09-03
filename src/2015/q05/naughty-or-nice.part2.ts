type NaughtyOrNice = 'naughty' | 'nice'

export const naughtyOrNice = (input: string): NaughtyOrNice => {
    let hasRepeatWithGap = false // e.g., efe
    let hasRepatedPair = false // e.g., xyxy
    const pairMap: {[key: string]: number} = {}

    let index = 0
    for (const letter of input) {
        if (letter === input[index + 2]) hasRepeatWithGap = true

        if (index < input.length - 1) {
            const pair = `${letter}${input[index + 1]}`
            if (pairMap[pair] !== undefined && pairMap[pair] !== index - 1) {
                hasRepatedPair = true
            } else if (pairMap[pair] === undefined) {
                pairMap[pair] = index
            }
        }
        index++
    }

    return hasRepatedPair && hasRepeatWithGap
        ? 'nice' 
        : 'naughty'
}