const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
  }

const PORT = process.env.SERVER_PORT || 4000
  
import { options, ackermann, factorial, fibonacci } from './functions'

app.use(cors())

const jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/options/', (req, res) => {
    const data = JSON.stringify(options)
    res.send(data)
})

app.post('/fibonacci/', jsonParser, (req, res) => {
    const input = req.body.input1
    const data = (JSON.stringify(fibonacci(input)))
    res.send(data)
})

app.post('/ackermann/', jsonParser, (req, res) => {
    const input1 = req.body.input1
    const input2 = req.body.input2
    const data = (JSON.stringify(ackermann(input1, input2)))
    res.send(data)
})

app.post('/factorial/', jsonParser, (req, res) => {
    const input = req.body.input1
    const data = (JSON.stringify(factorial(input)))
    res.send(data)
})

app.listen(PORT, () => {
    options.tests.ackermannTests()
    options.tests.factorialTests()
    options.tests.fibonacciTests()
    console.log(`Functions app listening on port ${PORT}!`)
})