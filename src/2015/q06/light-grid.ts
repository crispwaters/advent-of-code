type LightGrid = {
    [key: string]: 'on' | 'off'
}

const isTurnOn = (instruction: string): boolean => instruction.startsWith('turn on')
const isTurnOff = (instruction: string): boolean => instruction.startsWith('turn off')
const isToggle = (instruction: string): boolean => instruction.startsWith('toggle')

const getRange = (instruction: string): {x: number, y: number}[] => {
    const [lower, upper] = [...instruction.matchAll(/\d{1,3},\d{1,3}/g)].map(match => match[0])
    const min = {
        x: Number(lower.split(',')[0]),
        y: Number(lower.split(',')[1])
    }
    const max = {
        x: Number(upper.split(',')[0]),
        y: Number(upper.split(',')[1])
    }
    return [min, max]
}

type State = {
    instruction: string,
    grid: LightGrid
}

export const lightGrid = (input: string): LightGrid => {
    const instructions = input.split('\n')
    const state: State = {instruction: '', grid: {}}
    while (instructions.length) {
        state.instruction = instructions.shift() as string
        if (!state.instruction) continue
        if (isTurnOn(state.instruction)) doTurnOn(state)
        else if (isTurnOff(state.instruction)) doTurnOff(state)
        else if (isToggle(state.instruction)) doToggle(state)
        else throw new Error('Invalid instruction: ' + state.instruction)
    }
    return state.grid
}

const doTurnOn = (state: State): void => doAction(state, () => 'on')
const doTurnOff = (state: State): void => doAction(state, () => 'off')
const doToggle = (state: State): void => doAction(state, (state: 'on' | 'off') => state === 'on' ? 'off' : 'on')
const doAction = ({instruction, grid}: State, action: (state: 'on' | 'off') => 'on' | 'off'): void => {
    const [min, max] = getRange(instruction);
    for (let x = min.x; x <= max.x; x++) {
        for (let y = min.y; y <= max.y; y++) {
            const key = `${x},${y}`;
            grid[key] = action(grid[key] || 'off');
        }
    }
};
