export const parse = (input: string): number => input.split('').reduce((acc, char) => {
    if (char === '(') {
        return acc + 1
    } else if (char === ')') {
        return acc - 1
    } else {
        throw new Error(`Unexpected character: ${char}`)
    }
}, 0)