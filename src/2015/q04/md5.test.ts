import {test, expect} from 'vitest'
import { md5 } from './md5'

test('md5 - abcdef609043', () => {
    expect(md5('abcdef609043')).toBe('000001dbbfa3a5c83a2d506429c7b00e')
})

test('md5 - pqrstuv1048970', () => {
    expect(md5('pqrstuv1048970')).toBe('000006136ef2ff3b291c85725f17325c')
})

test('md5 - abcdef609043', () => {
    expect(md5('abcdef609043')).toBe('000001dbbfa3a5c83a2d506429c7b00e')
})