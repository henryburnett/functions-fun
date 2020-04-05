export const fibonacci = (input) => {

    const value = Number(input)

    if (validation(value)) {
        return calculation(value)
        
    } else {
        return "Error: input value must be an integer"
    }
     
}

const validation = value => {
    return Number.isInteger(value)
}

const calculation = n => {
    const absN = Math.abs(n)
    const values = calcValues(absN)
    const result = values[absN]
    if (n < 0) {
        return 0 - result
    } else {
        return result
    }
}

const calcValues = n => {
    if (n === 0) {
        return [0]
    } if (n === 1) {
        return [0,1]
    } else {
        let values = [0, 1, 1]
        let i = 0
        while (i < n-2) {
            const prevValue = values[values.length-1]
            const prevPrevValue = values[values.length-2]
            const nextValue = prevValue + prevPrevValue
            values.push(nextValue)
            i++
        }
        return values
    }
}

export const fibonacciTests = () => {
    console.log("fibonacci(0) === 0:", calculation(0) === 0)
    console.log("fibonacci(1) === 1:", calculation(1) === 1)
    console.log("fibonacci(2) === 1:", calculation(2) === 1)
    console.log("fibonacci(3) === 2:", calculation(3) === 2)
    console.log("fibonacci(5) === 5:", calculation(5) === 5)
    console.log("fibonacci(7) === 13:", calculation(7) === 13)
    console.log("fibonacci(8) === 21:", calculation(8) === 21)
    console.log("fibonacci(-1) === -1:", calculation(-1) === -1)
    console.log("fibonacci(-2) === -1:", calculation(-2) === -1)
    console.log("fibonacci(-3) === -2:", calculation(-3) === -2)
    console.log("fibonacci(-5) === -5:", calculation(-5) === -5)
    console.log("fibonacci(-7) === -13:", calculation(-7) === -13)
    console.log("fibonacci(-8) === -21:", calculation(-8) === -21)
}