import { join } from 'path'
import { readFileSync } from 'fs'

export const readInput = ({
    filename,
    directory
}: { filename: string, directory: string }): string => {
    const path = join(directory, filename)
    try {
        return readFileSync(path, 'utf8')
    } catch (e) {
        console.error({ 
            message: `readInput - Error reading file`,
            filename,
            path
        })
        throw e
    }
}
