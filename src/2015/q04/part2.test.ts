import {test} from 'vitest'
import { readInput } from '../../_util/read-input'
import { md5 } from './md5'

test('2015 - Day 4 - Part 2 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    let i = 1
    let hash = md5(input + i)
    while (!hash.startsWith('000000')) {
        i++
        hash = md5(input + i)
    }
    console.log(i)
})