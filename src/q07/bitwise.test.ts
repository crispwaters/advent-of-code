import {test, expect} from 'vitest'
import {AND, OR, LSHIFT, RSHIFT, NOT} from './bitwise'

test('AND', () => {
    expect(AND(123, 456)).toBe(72)
})

test('OR', () => {
    expect(OR(123, 456)).toBe(507)   
})

test('LSHIFT', () => {
    expect(LSHIFT(123, 2)).toBe(492)
})

test('RSHIFT', () => {
    expect(RSHIFT(456, 2)).toBe(114)
})

test('NOT', () => {
    expect(NOT(123)).toBe(65412)
    expect(NOT(456)).toBe(65079)
})