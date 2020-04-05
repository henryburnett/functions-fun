import React from 'react';
import styled from 'styled-components'
import { Form as FormikForm, Field } from 'formik'

export const Form = ({ errors, functionData, selectedOption, responseData }) => {
    
    const name = functionData[selectedOption].name
    const description = functionData[selectedOption].description
    const inputs = functionData[selectedOption].inputs
    
    return(
        <Container>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Inputs>
                {
                    inputs.map(input => (<Input type="input" key={input} name={input}/>))
                }
            </Inputs>
            {(errors.input1) ? <Error message={errors.input1}/> : null }
            {(errors.input2) ? <Error message={errors.input2}/> : null }
            <SubmitWrapper>
                <Submit type="submit">Submit</Submit>
            </SubmitWrapper>
            {(responseData && !errors.input1 && !errors.input2) ? <Response>Result: <b>{responseData}</b></Response> : null}
        </Container>
    )
}

const Container = styled(FormikForm)`
    width: 100%;
    max-width: 80vw;
    height: auto;
    border-radius: 3px;
    background-color: #FFB3C7;
    align-items: center;
    text-align: center;
    display: grid;
    grid-area: form;
    grid-column-areas: '1fr 1fr 1fr';
    grid-template-areas: 
        '. . .'
        '. name .'
        '. description .'
        '. . .'
        'inputs inputs inputs'
        '. submit .'
        '. . .'
        '. error .'
        '. response .';
    grid-gap: 2vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
`

const Name = styled.h2`
    grid-area: name;
`

const Description = styled.div`
    grid-area: description;
`

const Inputs = styled.div`
    grid-area: inputs;
`

const Input = styled(Field)`
    display: inline;
    margin-left: 2vw;
    margin-right: 2vw;
    border-radius: 3px;
    font-size: 16px;
    padding-left: 18px;
`

const SubmitWrapper = styled.div`
    grid-area: submit;
    text-align: center;
    align-items: center;
    width: 100%;
`

const Submit = styled.button`
    border-radius: 3px;
    font-size: 16px;
    align-self: center;
    background-color: rgba(0, 173, 255, .75);
    border: 1px solid #aaa;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}
`

const Response = styled.div`
    grid-area: response;
`

const ErrorDiv = styled.div`
    grid-area: error;
`

const Error = ({message}) => {
    return(
      <ErrorDiv>{message}</ErrorDiv>
    )
  }