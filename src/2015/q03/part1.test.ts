import {test} from 'vitest'
import { readDirections } from './read-directions'
import { readInput } from '../../_util/read-input'

test('2015 - Day 3 - Part 1 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const result = readDirections(input)
    console.log(Object.keys(result).length)
})