type NaughtyOrNice = 'naughty' | 'nice'
const forbiddenStrings = ['ab', 'cd', 'pq', 'xy']
export const naughtyOrNice = (input: string): NaughtyOrNice => {
    let vowelCount = 0
    let hasDoubleLetter = false
    let hasForbiddenString = false
    let lastLetter = ''

    for (const letter of input) {
        if (letter === lastLetter) hasDoubleLetter = true
        if (forbiddenStrings.includes(`${lastLetter}${letter}`)) hasForbiddenString = true
        if (['a', 'e', 'i', 'o', 'u'].includes(letter)) vowelCount++
        lastLetter = letter
    }
    return vowelCount >= 3 && hasDoubleLetter && !hasForbiddenString 
        ? 'nice' 
        : 'naughty'
}