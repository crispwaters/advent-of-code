import {test} from 'vitest'
import { readInput } from '../../_util/read-input'
import { GateFactory } from './gate.factory'
import { Gate } from './gates'

test('2015 - Day 7 - Part 2 - Answer', () => {
    const input = readInput({filename: 'input.aoc', directory: __dirname})
    const factory = new GateFactory()
    for (const line of input.split('\n')) {
        factory.read(line)
    }
    const a = factory.gates.get('a') as Gate
    a.value
    
    const factory2 = new GateFactory()
    for (const line of input.split('\n')) {
        if (line.endsWith('-> b')) {
            factory2.read(`${a.value} -> b`)
        } else {
            factory2.read(line)
        }
    }
    const result = factory2.result()
    console.log(result.a)
})