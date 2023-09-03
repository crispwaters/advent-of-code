import {test} from 'vitest'
import { roboSantaReadDirections } from './read-directions'
import { readInput } from '../../_util/read-input'

test('2015 - Day 3 - Part 2 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const result = roboSantaReadDirections(input)
    console.log(Object.keys(result).length)
})