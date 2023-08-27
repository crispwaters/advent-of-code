import {test, expect} from 'vitest'
import { calculate } from './calculate.ribbon-length'

test('calculate.ribbon-length - 2x3x4 returns 34', () => {
    expect(calculate(2, 3, 4)).toBe(34)
})

test('calculate.ribbon-length - 1x1x10 returns 14', () => {
    expect(calculate(1, 1, 10)).toBe(14)
})