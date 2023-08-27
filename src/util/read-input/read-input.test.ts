import { test, expect } from 'vitest';
import { readInput } from './read-input';

test('readInput - returns the contents of the file', () => {
    expect(readInput({
        filename: 'sample-input.txt',
        directory: __dirname
    })).toBe('This is sample input');
})