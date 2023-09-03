type House = {
    nPresents: number
}
type Grid = {
    [key: string]: House
}


export const readDirections = (input: string): Grid => {
    const grid: Grid = {}
    let x = 0, y = 0
    const deliverPresent = () => {
        if (!grid[`${x},${y}`]) {
            grid[`${x},${y}`] = {nPresents: 0}
        }
        grid[`${x},${y}`].nPresents++
    }
    deliverPresent()
    for (const direction of input) {
        switch (direction) {
            case '^':
                y++
                break
            case 'v':
                y--
                break
            case '>':
                x++
                break
            case '<':
                x--
                break
        }
        deliverPresent()
    }
    
    return grid
}

export const roboSantaReadDirections = (input: string): Grid => {
    const grid: Grid = {}
    let x = 0, y = 0
    let roboX = 0, roboY = 0
    let isSanta = true
    const deliverPresent = () => {
        const coordinates = isSanta ? `${x},${y}` : `${roboX},${roboY}`
        if (!grid[coordinates]) {
            grid[coordinates] = {nPresents: 0}
        }
        grid[coordinates].nPresents++
    }
    deliverPresent()
    for (const direction of input) {
        switch (direction) {
            case '^':
                isSanta ? y++ : roboY++
                break
            case 'v':
                isSanta ? y-- : roboY--
                break
            case '>':
                isSanta ? x++ : roboX++
                break
            case '<':
                isSanta ? x-- : roboX--
                break
        }
        deliverPresent()
        isSanta = !isSanta
    }
    
    return grid
}