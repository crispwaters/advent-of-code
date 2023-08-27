const defaultProcessor = (input: number) => input
export const parse = (input: string, process: (input: number) => number = defaultProcessor): number => input.split('').reduce((acc, char) => {
    if (char === '(') {
        return process(acc + 1)
    } else if (char === ')') {
        return process(acc - 1)
    } else {
        throw new Error(`Unexpected character: ${char}`)
    }
}, 0)