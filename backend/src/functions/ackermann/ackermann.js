export const ackermann = (m,n) => {
    ackermannTests()

    if(validation(m,n)) {
        return calculation(m,n)
    } else {
        return "Error: input values must be integers between 0 and 3"
    }
}

const validation = (m,n) => {
    return (0 <= m <= 3 && 0 <= n <= 3)
}

const calculation = (m,n) => {
    if (m === 0) {
      return n + 1
    }
    if (m > 0 && n === 0) {
      return calculation(m-1, 1)
    }
    if (m > 0 && n > 0) {
      return calculation((m-1), calculation(m, n-1))
    }
  }
  
export const ackermannTests = () => {
    console.log("ackermann(0,0) === 1:", calculation(0,0) === 1)
    console.log("ackermann(0,1) === 2:", calculation(0,1) === 2)
    console.log("ackermann(0,2) === 3:", calculation(0,2) === 3)
    console.log("ackermann(0,3) === 4:", calculation(0,3) === 4)
    console.log("ackermann(1,0) === 2:", calculation(1,0) === 2)
    console.log("ackermann(1,1) === 3:", calculation(1,1) === 3)
    console.log("ackermann(1,2) === 4:", calculation(1,2) === 4)
    console.log("ackermann(1,3) === 5:", calculation(1,3) === 5)
    console.log("ackermann(2,0) === 3:", calculation(2,0) === 3)
    console.log("ackermann(2,1) === 5:", calculation(2,1) === 5)
    console.log("ackermann(2,2) === 7:", calculation(2,2) === 7)
    console.log("ackermann(2,3) === 9:", calculation(2,3) === 9)
    console.log("ackermann(3,0) === 5:", calculation(3,0) === 5)
    console.log("ackermann(3,1) === 13:", calculation(3,1) === 13)
    console.log("ackermann(3,2) === 29:", calculation(3,2) === 29)
    console.log("ackermann(3,3) === 61:", calculation(3,3) === 61)
    console.log("ackermann(4,0) === 13:", calculation(4,0) === 13)
}
  