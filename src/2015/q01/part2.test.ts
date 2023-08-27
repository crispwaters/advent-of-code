import {test, expect} from 'vitest'
import {parse} from './parse'
import { readInput } from '../../_util/read-input'

const input = (filename: string) => readInput({filename, directory: __dirname})

const part2 = (input: string): {
    answer: number,
    history: number[]
} => {    
    let position = 0
    let currentFloor = 0
    let found = false
    const history: number[] = []
    
    const process = (input: number) => {
        history.push(currentFloor)
        currentFloor = input
        if (!found) {
            position++
            found = input === -1            
        }
        return input
    }
    parse(input, process)
    return {
        answer: position,
        history        
    }
}

test('2015 - Day 1 - Part 2 - Sample input', () => {
    expect(part2(')').answer).toBe(1)
    expect(part2('()())').answer).toBe(5)
})

test('2015 - Day 1 - Part 2 - Answer', () => {
    console.log(part2(input('input.aoc')))
})