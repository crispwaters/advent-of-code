import {test} from 'vitest'
import { readInput } from '../../_util/read-input'
import { naughtyOrNice } from './naughty-or-nice.part2'

test('2015 - Day 5 - Part 2 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const result = input.split('\n')
        .map(naughtyOrNice)
        .filter((x: string) => x === 'nice')
        .length
    console.log(result)
})