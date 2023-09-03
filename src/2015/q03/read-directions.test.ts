import {test, expect} from 'vitest'

import { readDirections, roboSantaReadDirections } from './read-directions'

test('readDirections - input:>', () => {
    const input = '>'
    const result = readDirections(input)
    expect(result).toEqual({'0,0': {nPresents: 1}, '1,0': {nPresents: 1}})
})

test('readDirections - input:^>v<', () => {
    const input = '^>v<'
    const result = readDirections(input)
    expect(result).toEqual({'0,0': {nPresents: 2}, '0,1': {nPresents: 1}, '1,0': {nPresents: 1}, '1,1': {nPresents: 1}})
})

test('readDirections - input:^v^v^v^v^v', () => {
    const input = '^v^v^v^v^v'
    const result = readDirections(input)
    expect(result).toEqual({'0,0': {nPresents: 6}, '0,1': {nPresents: 5}})
})

test('roboSantaReadDirections - input:^v', () => {
    const input = '^v'
    const result = roboSantaReadDirections(input)
    expect(result).toEqual({'0,-1': {nPresents: 1}, '0,0': {nPresents: 1}, '0,1': {nPresents: 1}})
})

test('roboSantaReadDirections - input:^>v<', () => {
    const input = '^>v<'
    const result = roboSantaReadDirections(input)
    expect(result).toEqual({'0,0': {nPresents: 3}, '1,0': {nPresents: 1}, '0,1': {nPresents: 1}})
})

test('roboSantaReadDirections - input:^v^v^v^v^v', () => {
    const input = '^v^v^v^v^v'
    const result = roboSantaReadDirections(input)
    expect(result).toEqual({
        '0,0': { nPresents: 1 },
        '0,1': { nPresents: 1 },
        '0,-1': { nPresents: 1 },
        '0,2': { nPresents: 1 },
        '0,-2': { nPresents: 1 },
        '0,3': { nPresents: 1 },
        '0,-3': { nPresents: 1 },
        '0,4': { nPresents: 1 },
        '0,-4': { nPresents: 1 },
        '0,5': { nPresents: 1 },
        '0,-5': { nPresents: 1 }
      })
})