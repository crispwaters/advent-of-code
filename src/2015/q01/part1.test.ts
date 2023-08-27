import { parse } from './parse'
import { readInput } from '../../_util/read-input'
import { test } from 'vitest'

test('2015 - Day 1 - Part 1 - Answer', () => {
    console.log(parse(readInput({
        filename: 'input.aoc',
        directory: __dirname
    })))
})