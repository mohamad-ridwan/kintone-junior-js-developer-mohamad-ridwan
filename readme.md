# **Kintone Developer Screening Test: Employee Management (Vanilla JS, HTML, CSS)**

## **✫ Instructions for Candidates**

Welcome to this screening test! You will build a simple **Employee Management System** using **Vanilla JavaScript**, **HTML**, and **CSS**. This system will allow users to **manage employees** using `JSON Server`.

### Requirements:

- node + npm (latest stable version)
- code editor + live server extension (or anything that could run your project in browser)

---

## **🛠 Setup Instructions**

### After unzipping this repository

### **1. Initiate the repository**

Initiate the repository by running

```sh
npm init -y
```

### **2. Rename db.json.example**

Rename db.json.example to db.json.

### **3. Install JSON Server (Dependencies)**

Before running the project initiate the npm then install `json-server` using:

```sh
npm install
```

### **4. Start JSON Server**

Run the following command to start the JSON server:

```sh
npm run start:json
```

This will create a local API at:

**🔗 `http://localhost:3000/employees`**

which then serve as the employee database.

---

## **📁 Project Structure**

You have been given `index.html`, `form.html`, `style.css`, `index-script.js`, and a `form-script.js` files to implement.

```
/project-folder
|/── node_modules     (ignore)
│── db.json           (Contains employee data - read only)
|── form-script.js    (Empty JS file)
|── form.html         (HTML file with boiler)
|── index-script.js   (Empty JS file)
│── index.html        (HTML file with boiler)
│── package-lock.json (ignore)
│── package.json      (ignore)
│── readme.md         (ignore)
│── style.css         (Empty CSS file)
```

**📈 Your task is to build the full implementation** inside these files.

---

## **📚 Task Breakdown**

### **1. HTML (`index.html`)**

Index page consisting of:

- Button to navigate to form.
- Filter component.
- Add a **table** to display employees.

### **2. HTML (`form.html`)**

Create a **simple form** with input fields for:

- `Name`
- `Position`
- A submit button.
- A back button.

### **3. JavaScript (`index-script.js`)**

Implement the following functions inside `index-script.js`:

#### ✅ **Fetch & Display Employees**

- Fetch data from `http://localhost:3000/employees`
- Display the data inside the table.

#### ✅ **Add Feature to Filter Data by Name and Reflect to Table**

- Filter by name on input.
- Display the data inside the table.

#### ✅ **(Bonus) Delete Employee**

- Add a delete button to remove an employee from the JSON Server.

### **4. JavaScript (`form-script.js`)**

Implement the following functions inside `form-script.js`:

#### ✅ **Add Employee**

- Capture user input from the form.
- Generate random string (10 digits alphanumeric).
- Send a `POST` request to `JSON Server` to save the new employee.
- Redirect to Index.

### **5. CSS (`style.css`)**

- Layout the page appropriately.
- Style buttons, form and table to make it visually appealing.
- Ensure the table is well-structured.

---

## **📊 Example API Data (`db.json`)**

Your `db.json` should be structured like this:

```json
{
  "employees": [
    {
      "id": "sz285ilr3x",
      "name": "Aulya",
      "position": "JS Developer"
    },
    {
      "id": "7ytlzdrer8",
      "name": "Faldi",
      "position": "Senior Developer"
    },
    {
      "id": "60eboyybvq",
      "name": "Taufiq",
      "position": "Manager"
    },
    {
      "id": "zrlem7fir3",
      "name": "Ariel",
      "position": "Senior DevOps Engineer"
    }
  ]
}
```

Please refer to [json-server's docs](https://www.npmjs.com/package/json-server) for more details.

## **📄 Submission Instructions**

1️⃣ Complete the implementation.

2️⃣ Create a public GitHub repository with format "kintone-junior-js-developer-[nama-anda]".

3️⃣ Send the link to the repository via email to bella@aqi.co.id and cc to aulya.khatulistivani@aqi.co.id with title kintone-junior-js-developer-[nama-anda].

**Good luck! 🍀**
