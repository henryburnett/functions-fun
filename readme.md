# Functions Fun App

## Introduction
A simple full-stack JavaScript app, written with React and Express.js
Serves three endpoints for calculating:

 - [Ackermann](https://en.wikipedia.org/wiki/Ackermann_function) 
 - [Factorial](https://en.wikipedia.org/wiki/Factorial)
 - [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)



## Installation

 `cd functions-fun`
 
 to run a local production build inside Docker:
 

    make local

or

    docker-compose up --build

To run without Docker, you must start the two services individually (`http://localhost:5000)`:

    cd ./backend
    npm install
    npm run start
    
    cd ../frontend
    npm install
    npm run build
    serve -s build

To run a dev version (`http://localhost:3000`):

    cd ./backend
    npm install
    npm run dev
    
    cd ../frontend
    npm install
    npm run start

A live version of the app can also be found at https://hburnett-functions-fun.herokuapp.com.

## Design Description
The Express.js server provides a list of function choices and their respective details (description, number of inputs) to the frontend via the `/options` endpoint. 

Each option includes a function name, and when the `selectedOption` changes (the user changes the value in the select), a form is rendered which reflects the function description and requirements sent from the backend.

Formik is used to help easily manage the state of the form and also provide conditional rendering of additional fields, for example errors coming from Yup validation. 

## Known Issues
Currently the form does not reset its values when the `selectedOption` is changed. These means, for example, that if an error is displayed for a given `factorial` input, when the user selects a new function, the previous input and error message will still be displayed until the form is submitted again.
Formik simplifies many things, but adds some complexity, too. This could probably be solved with a bit more time to investigate.