(async () => {
  const API_URL = 'http://localhost:3000/employees';

  /**
   * TODO:
   * - Add a function to redirect to the form page
   * - Add a function to fetch data
   * - Add a function to filter data by employee's name
   * - Add a function to display table
   * - Add a function to delete data (bonus)
   */

  const tableHeaderEmployees = [
    {
      name: 'No.'
    },
    {
      name: 'Employee ID'
    },
    {
      name: 'Name'
    },
    {
      name: 'Position'
    },
    {
      name: 'Action'
    }
  ]

  // created variable here for reuse
  const errResponseMsg = 'A server error has occurred. Please try again.'
  const employessTableEl = document.querySelector('#table-wrapper')
  const employeeDataEmptyMsg = 'No employee data available'
  const inputEmployeesEl = document.querySelector('#input-employees-filter')

  // redirect to form page
  const handleRedirect = (url) => {
    document.querySelector('#addEmployees')?.addEventListener('click', () => {
      window.location.href = url // url is for dynamic handle navigate
    })
  }

  // get employees data
  const getEmployeesData = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        return errResponseMsg
      }
      const result = await response.json()
      if (result?.length === undefined) {
        return errResponseMsg
      }
      return result
    } catch (error) {
      return errResponseMsg
    }
  }
  const employeesData = await getEmployeesData()
  const employeesFilterData = await getEmployeesData()

  // created display table for reuse it
  // display employees table
  const displayEmployeeTable = (employeesData) => {
    // validate employee data to empty data
    if (employeesData?.length === undefined || employeesData.length === 0) {
      employessTableEl.innerHTML = `
        <p>${employeeDataEmptyMsg}</p>
      `
      return
    }

    employessTableEl.innerHTML = `
      <table id="employess-data">
        <tr>
          ${tableHeaderEmployees.map(head => {
      return `<th>${head.name}</th>`
    }).join('')}
        </tr>
        ${employeesData.map((employee, index) => {
      return `
            <tr>
              <td>${index + 1}.</td>
              <td>${employee.id}</td>
              <td style="min-width: 100px;">${employee.name}</td>
              <td>${employee.position}</td>
              <td><button name="delete-${employee.id}" class="btn" style="background-color: #ff0000 !important;">
                <span class="btn-text">Delete</span>
              </button></td>
            </tr>
          `
    }).join('')}
      </table>
    `
  }

  // filter employees table feature
  const searchEmployee = () => {
    // validate employee data if empty
    if (employeesData?.length === undefined || employeesData.length === 0) {
      return
    }

    inputEmployeesEl.addEventListener('input', (event) => {
      const filterResult = employeesData.filter(employee =>
        employee.name?.toLowerCase().includes(event.target.value.toLowerCase())
      )
      displayEmployeeTable(filterResult)
    })
  }

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        return errResponseMsg
      }
      const result = await response.json()
      if (result?.length === undefined) {
        return errResponseMsg
      }
      return result
    } catch (error) {
      return errResponseMsg
    }
  }

  // call the function available here
  // for the first load call the employessData
  displayEmployeeTable(employeesData)
  searchEmployee()
  handleRedirect('../employee-form/index.html')
  employeesData?.forEach(employee => {
    document.querySelector(`button[name="delete-${employee.id}"]`)?.addEventListener('click', (e) => {
        handleDeleteEmployee(employee.id)
        window.location.reload()
    })
  })
})();
