import {test} from 'vitest'
import { calculate } from './calculate'
import { readInput } from '../../_util/read-input'

test('2015 - Day 2 - Part 1 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const result = input.split('\n')
        .map((line: string) => line.split('x').map(Number))
        .map(([l, w, h]: number[]) => calculate(l, w, h))
        .reduce((a: number, b: number) => a + b, 0)
    console.log(result)
})