import {Gate, AndGate, OrGate, NotGate, LShiftGate, RShiftGate, SignalGate} from './gates'

class PlaceholderGate extends Gate {
    constructor() {
        super();
    }
}

const parseAOpBTarget = (operation: string): {a: string, b: string, target: string } => {
    const aOpBTarget = /(\w+)\s\w+\s(\w+)\s->\s(\w+)/g
    const [,a,b,target] = operation.matchAll(aOpBTarget).next().value
    return {a,b,target}
}



export class GateFactory {
    gates: Map<string, Gate> = new Map()
    placeholders: Map<string, PlaceholderGate> = new Map()
    constructor() {}

    result(): { [key: string]: number } {
        const result: { [key: string]: number } = {}
        for (const [key, gate] of this.gates) {
            result[key] = gate.value
        }
        return result
    }
    
    read(instruction: string) {
        if (instruction.includes('AND')) this.createAndGate(instruction)
        else if (instruction.includes('OR')) this.createOrGate(instruction)
        else if (instruction.includes('NOT')) this.createNotGate(instruction)
        else if (instruction.includes('LSHIFT')) this.createLShiftGate(instruction)
        else if (instruction.includes('RSHIFT')) this.createRShiftGate(instruction)
        else this.createSignalGate(instruction)
    }

    private getGate(key: string): Gate {
        if (this.gates.has(key)) return this.gates.get(key) as Gate
        if (!Number.isNaN(Number(key))) {
            const gate = new SignalGate(Number(key))
            gate.setValue()
            return gate
        }
        if (this.placeholders.has(key)) return this.placeholders.get(key) as Gate
        const gate = new PlaceholderGate()
        this.placeholders.set(key, gate)
        return gate
    }

    private linkPlaceholders(key: string, gate: Gate): void {
        if (!this.placeholders.has(key)) return
        const placeholder = this.placeholders.get(key) as Gate
        for (const output of placeholder.output) {
            output.input = output.input.map(input => input === placeholder ? gate : input)
            gate.output.push(output)
        }
        this.placeholders.delete(key)
    }

    private createAndGate(instruction: string) {
        const {a,b,target} = parseAOpBTarget(instruction)
        const gate = new AndGate()
        this.setupGate(target, gate, [this.getGate(a), this.getGate(b)])
    }

    private createOrGate(instruction: string) {
        const {a,b,target} = parseAOpBTarget(instruction)
        const gate = new OrGate()
        this.setupGate(target, gate, [this.getGate(a), this.getGate(b)])
    }

    private createNotGate(instruction: string) {
        const [a,target] = instruction.substring(4).split(' -> ')
        const gate = new NotGate()
        this.setupGate(target, gate, [this.getGate(a)])
    }

    private createLShiftGate(instruction: string) {
        const {a,b: power,target} = parseAOpBTarget(instruction)
        const gate = new LShiftGate(Number(power))
        this.setupGate(target, gate, [this.getGate(a)])
    }

    private createRShiftGate(instruction: string) {
        const {a,b: power,target} = parseAOpBTarget(instruction)
        const gate = new RShiftGate(Number(power))
        this.setupGate(target, gate, [this.getGate(a)])
    }

    private createSignalGate(instruction: string) {
        const [a,target] = instruction.split(' -> ')
        if (Number.isNaN(Number(a))) {
            const gate = new SignalGate(0)
            this.setupGate(target, gate, [this.getGate(a)])
        } else {
            const gate = new SignalGate(Number(a))
            this.setupGate(target, gate, [])
        }
    }

    private setupGate(key: string, gate: Gate, input: Gate[]) {
        for (const inputGate of input) {
            inputGate.output.push(gate)
            gate.input.push(inputGate)
        }
        this.gates.set(key, gate)
        this.linkPlaceholders(key, gate)
        gate.setValue()
    }
}