import {test, expect} from 'vitest'
import { SignalGate, AndGate, OrGate, NotGate, LShiftGate, RShiftGate } from './gates'

const x = new SignalGate(123)
const y = new SignalGate(456)
x.setValue()
y.setValue()

test('SignalGate - emits signal', () => {
    const gate = new SignalGate(123)
    gate.setValue()
    expect(gate.value).toBe(123)
    expect(gate.isReady).toBe(true)
})

test('AndGate - setValue - input not ready', () => {
    const gate = new AndGate()
    gate.input.push(x, new SignalGate(456))
    gate.setValue()
    expect(gate.isReady).toBe(false)
})

test('AndGate - setValue - input ready', () => {
    const gate = new AndGate()
    gate.input.push(x, y)
    gate.setValue()
    expect(gate.isReady).toBe(true)
    expect(gate.value).toBe(72)
})

test('OrGate - setValue - input not ready', () => {
    const gate = new OrGate()
    gate.input.push(x, new SignalGate(456))
    gate.setValue()
    expect(gate.isReady).toBe(false)
})

test('OrGate - setValue - input ready', () => {
    const gate = new OrGate()
    gate.input.push(x, y)
    gate.setValue()
    expect(gate.isReady).toBe(true)
    expect(gate.value).toBe(507)
})

test('NotGate - setValue - input not ready', () => {
    const gate = new NotGate()
    gate.input.push(new SignalGate(123))
    gate.setValue()
    expect(gate.isReady).toBe(false)
})

test('NotGate - setValue - input ready', () => {
    const gate = new NotGate()
    gate.input.push(x)
    gate.setValue()
    expect(gate.isReady).toBe(true)
    expect(gate.value).toBe(65412)
})

test('LShiftGate - setValue - input not ready', () => {
    const gate = new LShiftGate(2)
    gate.input.push(new SignalGate(123))
    gate.setValue()
    expect(gate.isReady).toBe(false)
})

test('LShiftGate - setValue - input ready', () => {
    const gate = new LShiftGate(2)
    gate.input.push(x)
    gate.setValue()
    expect(gate.isReady).toBe(true)
    expect(gate.value).toBe(492)
})

test('RShiftGate - setValue - input not ready', () => {
    const gate = new RShiftGate(2)
    gate.input.push(new SignalGate(456))
    gate.setValue()
    expect(gate.isReady).toBe(false)
})

test('RShiftGate - setValue - input ready', () => {
    const gate = new RShiftGate(2)
    gate.input.push(y)
    gate.setValue()
    expect(gate.isReady).toBe(true)
    expect(gate.value).toBe(114)
})

test('Gates emit value when setValue is called', () => {
    const gate1 = new AndGate()
    const gate2 = new SignalGate(123)
    const gate3 = new SignalGate(456)
    const gate4 = new NotGate()
    gate1.input.push(gate2, gate3)
    gate2.output.push(gate1)
    gate3.output.push(gate1)
    gate4.input.push(gate1)
    gate1.output.push(gate4)
    gate1.setValue()
    expect(gate1.isReady).toBe(false)
    expect(gate4.isReady).toBe(false)
    gate2.setValue()
    expect(gate1.isReady).toBe(false)
    expect(gate4.isReady).toBe(false)
    gate3.setValue()
    expect(gate1.isReady).toBe(true)
    expect(gate1.value).toBe(72)
    expect(gate4.isReady).toBe(true)
    expect(gate4.value).toBe(65463)
})