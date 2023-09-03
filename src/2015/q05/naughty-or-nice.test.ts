import {test, expect} from 'vitest'
import { naughtyOrNice } from './naughty-or-nice'

test('naughtyOrNice - ugknbfddgicrmopn', () => {
    expect(naughtyOrNice('ugknbfddgicrmopn')).toBe('nice')
})

test('naughtyOrNice - aaa', () => {
    expect(naughtyOrNice('aaa')).toBe('nice')
})

test('naughtyOrNice - jchzalrnumimnmhp', () => {
    expect(naughtyOrNice('jchzalrnumimnmhp')).toBe('naughty')
})

test('naughtyOrNice - haegwjzuvuyypxyu', () => {
    expect(naughtyOrNice('haegwjzuvuyypxyu')).toBe('naughty')
})

test('naughtyOrNice - dvszwmarrgswjxmb', () => {
    expect(naughtyOrNice('dvszwmarrgswjxmb')).toBe('naughty')
})