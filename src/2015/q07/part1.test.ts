import {test} from 'vitest'
import { readInput } from '../../_util/read-input'
import { GateFactory } from './gate.factory'

test('2015 - Day 7 - Part 1 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const factory = new GateFactory()
    for (const line of input.split('\n')) {
        factory.read(line)
    }
    const result = factory.result()
    console.log(result.a)
})