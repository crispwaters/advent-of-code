import {test, expect} from 'vitest'
import { naughtyOrNice } from './naughty-or-nice.part2'

test('naughtyOrNice - qjhvhtzxzqqjkmpb', () => {
    expect(naughtyOrNice('qjhvhtzxzqqjkmpb')).toBe('nice')
})

test('naughtyOrNice - xxyxx', () => {
    expect(naughtyOrNice('xxyxx')).toBe('nice')
})

test('naughtyOrNice - uurcxstgmygtbstg', () => {
    expect(naughtyOrNice('uurcxstgmygtbstg')).toBe('naughty')
})

test('naughtyOrNice - ieodomkazucvgmuy', () => {
    expect(naughtyOrNice('ieodomkazucvgmuy')).toBe('naughty')
})