(() => {
  const API_URL = 'http://localhost:3000/employees';

  /**
   * TODO:
   * - Add a function to generate random string (10 digits alphanumeric) for id
   * - Add a function to add new data (submit)
   * - Add a function to redirect to the index page
   */

  let employeeForm = {
    id: '',
    name: '',
    position: ''
  }

  // created variable here for reuse
  const errResponseMsg = 'A server error has occurred. Please try again.'
  const successSubmitResponse = 'Successfully added employees'

  const form = document.querySelector('#employeeForm')

  // generate random id for id
  function generateRandomId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomId = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomId += characters[randomIndex];
    }

    return randomId
  }

  const randomId = generateRandomId()
  // update random id to id form data
  employeeForm = {
    ...employeeForm,
    id: randomId
  }
  // put random id to id input
  document.querySelector('input[name="id"]').value = randomId

  // add new data
  const addNewData = async (formData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (!response.ok) {
        return errResponseMsg
      }
      const result = await response.json()
      return result
    } catch (error) {
      return errResponseMsg
    }
  }

  const validateForm = () => {
    let err = {}
    if (!employeeForm.name.trim()) {
      err.name = 'Must be required!'
    }
    if (!employeeForm.position.trim()) {
      err.position = 'Must be required!'
    }

    return err
  }

  const handleSubmitAddEmployeeData = async () => {
    // validate submit form
    if (Object.keys(validateForm()).length > 0) {
      alert('Please complete the form!')
      return
    }

    const result = await addNewData(employeeForm)
    if (!result?.id) {
      alert(errResponseMsg)
      return
    }
    alert(successSubmitResponse)
  }

  const submitAddEmployeeData = () => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      event.stopPropagation()

      handleSubmitAddEmployeeData()
    })
  }

  const handleChangeInput = (name) => {
    document.querySelector(`input[name=${name}]`)?.addEventListener('input', (event) => {
      employeeForm = {
        ...employeeForm,
        [event.target.name]: event.target.value
      }

      if(Object.keys(validateForm()).length > 0){
        document.querySelector('#submitForm').setAttribute('class', 'disabled-btn btn submit-btn')
        document.querySelector('#submitForm').disabled = true
      }else{
        document.querySelector('#submitForm').setAttribute('class', 'btn submit-btn')
        document.querySelector('#submitForm').disabled = false
      }
    })
  }

  document.querySelector('#submitForm').addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    handleSubmitAddEmployeeData()
  })

  document.querySelector('#backToEmployee').addEventListener('click', () => {
    window.location.href = '../employee/index.html'
  })

  // call each input
  Object.keys(employeeForm).forEach((value, index, arr) => {
    handleChangeInput(value)
  })
  submitAddEmployeeData()
})();
