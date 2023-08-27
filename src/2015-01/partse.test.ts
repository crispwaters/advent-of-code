import { expect, test } from 'vitest'
import { parse } from './parse'

test('parse - (()) returns 0', () => {
    expect(parse('(())')).toBe(0)
})

test('parse - ()() returns 0', () => {
    expect(parse('()()')).toBe(0)
})

test('parse - ))((((( returns 3', () => {
    expect(parse('))(((((')).toBe(3)
})

test('parse - ()) returns -1', () => {
    expect(parse('())')).toBe(-1)
})

test('parse - ))( returns -1', () => {
    expect(parse('))(')).toBe(-1)
})

test('parse - ))) returns -3', () => {
    expect(parse(')))')).toBe(-3)
})

test('parse - )())()) returns -3', () => {
    expect(parse(')())())')).toBe(-3)
})