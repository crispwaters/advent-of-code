import {test} from 'vitest'

import { lightGrid } from './light-grid'
import { readInput } from '../../_util/read-input'

test('2015 - Day 6 - Part 1 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const result = lightGrid(input)
    console.log(Object.values(result).filter(state => state === 'on').length)
})