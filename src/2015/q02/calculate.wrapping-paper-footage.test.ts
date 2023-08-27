import {test, expect} from 'vitest'
import { calculate } from './calculate.wrapping-paper-footage'

test('calculate - 2x3x4 returns 58', () => {
    expect(calculate(2, 3, 4)).toBe(58)
})

test('calculate - 1x1x10 returns 43', () => {
    expect(calculate(1, 1, 10)).toBe(43)
})