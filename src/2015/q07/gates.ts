export class Gate {
    input: Gate[] = []
    output: Gate[] = []
    
    isReady: boolean = false
    value: number = 0

    constructor() {}
    setValue() {
        if (!this.isReady) return
        this.value = this.value % 65536
        this.emit()
    }
    emit() {
        for (const gate of this.output) {
            gate.setValue()
        }
    }
}

export class AndGate extends Gate {
    constructor() {
        super();
    }
    setValue(): void {
        if (this.input.length < 2) return
        if (this.input.some(gate => !gate.isReady)) return
        const [a, b] = this.input
        this.value = a.value & b.value
        this.isReady = true
        super.setValue()
    }
}

export class OrGate extends Gate {
    constructor() {
        super();
    }
    setValue(): void {
        if (this.input.length < 2) return
        if (this.input.some(gate => !gate.isReady)) return
        const [a, b] = this.input
        this.value = a.value | b.value
        this.isReady = true
        super.setValue()
    }
}

export class NotGate extends Gate {
    constructor() {
        super();
    }
    setValue(): void {
        if (this.input.length < 1) return
        if (this.input.some(gate => !gate.isReady)) return
        this.value = this.input[0].value ^ 0xFFFF 
        this.isReady = true
        super.setValue()
    }
}

export class LShiftGate extends Gate {
    power: number
    constructor(power: number) {
        super();
        this.power = power
    }
    setValue(): void {
        if (this.input.length < 1) return
        if (this.input.some(gate => !gate.isReady)) return
        const [a] = this.input
        this.value = (a.value << this.power)
        this.isReady = true
        super.setValue()
    }
}

export class RShiftGate extends Gate {
    power: number
    constructor(power: number) {
        super();
        this.power = power
    }
    setValue(): void {
        if (this.input.length < 1) return
        if (this.input.some(gate => !gate.isReady)) return
        const [a] = this.input
        this.value = (a.value >> this.power)
        this.isReady = true
        super.setValue()
    }
}

export class SignalGate extends Gate {
    constructor(value: number) {
        super();
        this.value = value
    }
    setValue(): void {
        if (this.input.length) {
            if (this.input.some(gate => !gate.isReady)) return
            const [a] = this.input
            this.value = a.value
            this.isReady = true
            super.setValue()
        } else {
            this.isReady = true
            super.setValue()
        }
    }
}