export const factorial = (input) => {

    const value = Number(input)

    if (validation(value)) {
        return calculation(value)
    } else {
        return "Error: input value must be a non-negative integer"
    }
}

const validation = value => {
    return ((Number.isInteger(value)) && (value >= 0))
}

const calculation = n => {
    if (n == 0) { return 1 }
    else {
        return calculation(n-1) * n
    }
}

export const factorialTests = () => {
    console.log("factorial(0) === 1:", calculation(0) === 1)
    console.log("factorial(1) === 1:", calculation(1) === 1)
    console.log("factorial(3) === 6:", calculation(3) === 6)
    console.log("factorial(5) === 120:", calculation(5) === 120)
    console.log("factorial(6) === 720:", calculation(6) === 720)
    console.log("factorial(10) === 3628800:", calculation(10) === 3628800)
}
