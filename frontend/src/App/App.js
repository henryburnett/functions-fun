import React, { useState, useEffect } from 'react';
import { Formik } from 'formik'
import styled from 'styled-components'

import { Form } from './Form'
import { validationSchema } from './validationSchema'

export const App = () => {
  console.log(process.env)

  const API_HOST = process.env.REACT_APP_API_HOST

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('')
  const [functionData, setFunctionData] = useState({})
  const [responseData, setResponseData] = useState('')

  const submitData = async (input1, input2) => {
    const response = await fetch(`${API_HOST}/${selectedOption}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({input1: input1, input2: input2})
    })
    const result = await response.json()
    setResponseData(result)
    return result
  }
  
  useEffect(() => {
    const getOptions = async () => {
      let response = await fetch(`${API_HOST}/options/`);
      let data = await response.json()
      setOptions(data.functions);
      setFunctionData(data.details)
    }
    getOptions()
  }, []);

  if (options.length > 0) {
    return (
      <AppContainer className="App"> 
        <GridContainer>
          <Header><h1>Functions Task App</h1></Header>
          <Select 
            name="option"
            onChange={(e) => {
              setSelectedOption(e.target.value)
            }}
            defaultValue={""}
            >
            <option value="" disabled>Select a function...</option>
            {
              options.map(option => {
                  return(<option value={option} id={option} key={option}>{option}</option>)
              })
            }
          </Select>
          {
            (selectedOption) ? 
          <Formik
            initialValues={{ input1: '', input2: '' }}
            validationSchema={validationSchema(selectedOption)}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={({input1, input2}) => submitData(input1, input2)}
          >
            {(props) => <Form 
                        responseData={responseData} 
                        functionData={functionData} 
                        selectedOption={selectedOption}
                        {...props} 
                        />}
          </Formik> : null
          }
          </GridContainer>
      </AppContainer>
    )
  }
  else {
    return <AppContainer className="App"><White>There was an error while fetching the data</White></AppContainer>
  }
}

const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  font-family: 'Open Sans';
  text-align: center;
  background-image: url('/galaxy.jpg');
  background-attachment: fixed;
  background-position: center top;
	background-size: cover;
  height: 100vh;
  width: auto;
  align-items: flex-start;
  justify-content: center;
  display: flex;
`
const White = styled.span`
  color: white;
`

const GridContainer = styled.div`
  margin-top: 15vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'select'
    'form';
`

const Header = styled.div`
  grid-area: header;
  background-color: #FFB3C7;
  border-radius: 3px;
  padding: 2vh;
  font-style: bold;
  font-size: 1.5rem;
`

const Select = styled.select`
  grid-area: select;
  text-transform: capitalize;
`


