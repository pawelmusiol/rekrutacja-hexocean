export const normalizeTime = (value, previousValue) => {
    const numbers = value.replace(/[^\d]/g, '')
    if (!value) {
        return value
    }
    if (!previousValue || previousValue.length < value.length) {
        if (numbers.length === 2) {
            return `${numbers}:`
        }
        if (numbers.length === 4) {
            return `${numbers.slice(0, 2)}:${validateNumber(numbers.slice(2,4),59)}`
        }

    }
    if (numbers.length <= 2) {
        return numbers
    }
    if (numbers.length <= 4) {
        return `${numbers.slice(0, 2)}:${validateNumber(numbers.slice(2,4),60)}`
    }
    return `${numbers.slice(0, 2)}:${validateNumber(numbers.slice(2,4),60)}:${validateNumber(numbers.slice(4,6),59)}`
}

export const normalizeNumber = (value, previousValue) => {
    if (!value) {
        return previousValue
    }
    const numbers = value.replace(/[^\d]/g, ',')
    return parseInt(numbers)
}


const validateNumber = (sliced, max) => {
    if (sliced > max) {
        return max
    }
    return sliced
}

