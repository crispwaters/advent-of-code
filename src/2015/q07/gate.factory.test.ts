import {test, expect} from 'vitest'
import { GateFactory } from './gate.factory'

test('GateFactory - example 1', () => {
    const input = [
        '123 -> x',
        '456 -> y',
        'x AND y -> d',
        'x OR y -> e',
        'x LSHIFT 2 -> f',
        'y RSHIFT 2 -> g',
        'NOT x -> h',
        'NOT y -> i'
    ]
    const factory = new GateFactory()
    for (const line of input) {
        factory.read(line)
    }
    const result = factory.result()
    expect(result).toEqual({
        d: 72,
        e: 507,
        f: 492,
        g: 114,
        h: 65412,
        i: 65079,
        x: 123,
        y: 456
    })
})

test('GateFactory - example 2', () => {
    const input = [
        '123 -> x',
        '456 -> y',
        'x AND y -> d',
        'x OR y -> e',
        'x LSHIFT 2 -> f',
        'y RSHIFT 2 -> g',
        'NOT x -> h',
        'NOT y -> i'
    ].reverse()
    const factory = new GateFactory()
    for (const line of input) {
        factory.read(line)
    }
    const result = factory.result()
    expect(result).toEqual({
        d: 72,
        e: 507,
        f: 492,
        g: 114,
        h: 65412,
        i: 65079,
        x: 123,
        y: 456
    })
})

test('GateFactory - example 3', () => {
    const input = [
        '123 -> x',
        'y -> z',
        '456 -> y',
        'x AND y -> d',
        'x OR y -> e',
        'x LSHIFT 2 -> f',
        'y RSHIFT 2 -> g',
        'NOT x -> h',
        'NOT y -> i',
    ]
    const factory = new GateFactory()
    for (const line of input) {
        factory.read(line)
    }
    const result = factory.result()
    expect(result).toEqual({
        d: 72,
        e: 507,
        f: 492,
        g: 114,
        h: 65412,
        i: 65079,
        x: 123,
        y: 456,
        z: 456
    })
})