import { fibonacci, fibonacciTests } from './fibonacci'
import { ackermann, ackermannTests } from './ackermann'
import { factorial, factorialTests } from './factorial'

export { ackermann, factorial, fibonacci }

export const options = {
    functions: ["ackermann", "factorial", "fibonacci"],
    details: {
        ackermann: {
            inputs: ['input1', 'input2'],
            name: "Ackermann Function",
            description: "Returns the output of values m and n in one of earliest-discovered examples of a total computable function that is not primitive recursive." 
        },
        factorial: {
            inputs: ['input1'],
            name: "Factorial Function",
            description: "Returns the product of all positive integers less than or equal to n. By convention, the factorial of 0 is 1."
        },
        fibonacci: {
            inputs: ['input1'],
            name: "Fibonnaci Function",
            description: "Returns the n number in the Fibonacci sequence, wherein each number is the sum of the two preceding ones, starting from 0 and 1."
        }
    },
    
    tests: {ackermannTests, factorialTests, fibonacciTests},
}
