import * as Yup from 'yup'

export const validationSchema = (selectedOption) => {

  const requiredMessage = "An input value is required."

  if (selectedOption === 'factorial') {
    const message = "Input should be an integer between 0 and 25"
    return Yup.object().shape({
      input1: Yup.number().integer(message).min(0, message).max(25, message).required(requiredMessage)
    })
  }
  if (selectedOption === 'fibonacci') {
    const message = "Input value must be an integer between -100 and 100"
    return Yup.object().shape({input1: Yup.number().integer().min(-100, message).max(100, message).required(requiredMessage)})
  }
  if (selectedOption === 'ackermann') {
    const message = "Input values must be integers between 0 and 3"
    return Yup.object().shape({
      input1: Yup.number().integer().min(0, message).max(3, message).required(requiredMessage),
      input2: Yup.number().integer().min(0, message).max(3, message).required(requiredMessage)
    })
  }
  
}
