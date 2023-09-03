import {test, expect} from 'vitest'
import { lightGrid } from './light-grid'

test('lightGrid - turn on 0,0 through 999,999', () => {
    const input = 'turn on 0,0 through 999,999'
    const result = lightGrid(input)
    expect(Object.keys(result).length).toEqual(1000000)
})

test('lightGrid - toggle 0,0 through 999,0', () => {
    const input = 'toggle 0,0 through 999,0'
    const result = lightGrid(input)
    expect(Object.keys(result).length).toEqual(1000)
})

test('lightGrid - multiple instructions', () => {
    const instructions = [
        'turn on 0,0 through 999,999',
        'toggle 0,0 through 999,0',
        'turn off 499,499 through 500,500'
    ]
    const result = lightGrid(instructions.join('\n'))
    console.log(Object.keys(result).filter(key => result[key] === 'off').length)
    expect(Object.values(result).filter(state => state === "on").length).toEqual(1000000 - 1000 - 4)
})