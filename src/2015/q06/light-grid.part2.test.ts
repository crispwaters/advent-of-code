import {test, expect} from 'vitest'
import { lightGrid } from './light-grid.part2'

test('lightGrid - turn on 0,0 through 0,0', () => {
    const input = 'turn on 0,0 through 0,0'
    const result = lightGrid(input)
    expect(Object.values(result).reduce((acc, cur) => acc + cur, 0)).toEqual(1)
})

test('lightGrid - toggle 0,0 through 999,999', () => {
    const input = 'toggle 0,0 through 999,999'
    const result = lightGrid(input)
    expect(Object.values(result).reduce((acc, cur) => acc + cur, 0)).toEqual(2000000)
})