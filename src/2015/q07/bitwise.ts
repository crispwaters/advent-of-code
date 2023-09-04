/**
 * Performs a bitwise AND operation on two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The result of the bitwise AND operation.
 */
export const AND = (a: number, b: number): number => a & b;

/**
 * Performs a bitwise OR operation on two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The result of the bitwise OR operation.
 */
export const OR = (a: number, b: number): number => a | b;

/**
 * Performs a left shift operation on a number.
 * @param a The number to shift.
 * @param n The number of bits to shift by.
 * @returns The result of the left shift operation.
 */
export const LSHIFT = (a: number, n: number): number => a << n;

/**
 * Performs a right shift operation on a number.
 * @param a The number to shift.
 * @param n The number of bits to shift by.
 * @returns The result of the right shift operation.
 */
export const RSHIFT = (a: number, n: number): number => a >> n;

/**
 * Performs a bitwise NOT operation on a number.
 * @param a The number to negate.
 * @returns The result of the bitwise NOT operation.
 */
export const NOT = (a: number): number => a ^ 0xFFFF;