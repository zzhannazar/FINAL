 let name=localStorage.getItem('name')?localStorage.getItem('name'):''
 console.log(name);
 if(name=='')
 {
   alert('Go to the login page');
   window.location.href="login.html";
 }
   function Logout()
        {
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          window.location.href="login.html";
      
        }

const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];
let rowIndex;


const tableHead = data => {
  let ObjectKeys;
  for (let items of data) {
    ObjectKeys = Object.keys(items);
  }
  let row = document.createElement("tr");
  for (let key of ObjectKeys) {
    let heading = document.createElement("th");
    heading.innerText = key;
    row.appendChild(heading);
  }
  thead.appendChild(row); 
  table.appendChild(thead); 
};


const tableBody = data => {
  for (let items of data) {
    let ObjectKeys = Object.values(items); 
    let row = document.createElement("tr");
    for (let values of ObjectKeys) {
      let cell = document.createElement("td");
      cell.innerText = values;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody); 
  console.log(table);
};


const FunctionCreate = () => {
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  if (email === "") {
    alert("item email can not be left empty");
    document.querySelector("#email").focus();
    return;
  }
  if (name === "") {
    alert("item name can not be left empty");
    document.querySelector("#name").focus();
    return;
  }
  if (password === "") {
    alert("item date can not be left empty");
    document.querySelector("#password").focus();
    return;
  }
  const formData = { /*JS object*/
    email,
    name,
    password
  };
  array.push(formData);

  try {
    if (localStorage.getItem("users") === null) { /*Get the value of the specified local storage item*/
      localStorage.setItem("users", JSON.stringify(array));
    } else {
      let storage = JSON.parse(localStorage.getItem("users")); /*to convert text into a JavaScript object*/
      storage.push(formData);
      localStorage.setItem("users", JSON.stringify(storage));
      console.log(storage);
    }
  } catch (err) { /*catch block catches the error and show it on console*/
    console.error(err);
  }
  alert("You have successfully saved the product item");
  form.reset();
};

const FunctionRead = () => {
  const storage = JSON.parse(localStorage.getItem("users"));
  if (storage && storage.length >= 1) {
    if (table.rows.length < 1) {
      tableHead(storage);
      tableBody(storage);
    }
  } else {
    return;
  }
};


table.onclick = () => {
  let row = table.rows;
  for (let i = 0; i < row.length; i++) {
    row[i].addEventListener("click", activateItem);
  }
};

function activateItem() {
  rowIndex = this.rowIndex;
  let email = document.querySelector("#email");
  let name = document.querySelector("#name");
  let password = document.querySelector("#password");

  email.value = this.cells[0].innerText;
  name.value = this.cells[1].innerText;
  password.value = this.cells[2].innerText;
}

const FunctionUpdate = () => {
  const storage = JSON.parse(localStorage.getItem("users"));
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  let tableRowIndex = rowIndex - 1;
  if (tableRowIndex) {
    if (email === "") {
      alert("Email can not be left empty");
      document.querySelector("#email").focus();
      return;
    }
    if (name === "") {
      alert("Name can not be left empty");
      document.querySelector("#name").focus();
      return;
    }
    if (password === "") {
      alert("Password can not be left empty");
      document.querySelector("#password").focus();
      return;
    }
    let confirm = window.confirm("Are you want to update this data?");
    if (confirm === true) {
      tableRowIndex &&
        storage.splice(tableRowIndex, 0, {  email, name, password});
      localStorage.setItem("users", JSON.stringify(storage));
      console.log(storage);
      window.alert("Item list have been updated");
      window.location.reload();
    } else {
      return;
    }
  } else {
    return;
  }
};

/**/
const FunctionDelete = () => {
  let confirm = window.confirm("Are you want to delete this data?");
  if (confirm === true) {
    const storage = JSON.parse(localStorage.getItem("users"));
    let tableRowIndex = rowIndex - 1;
    if (tableRowIndex) {
      tableRowIndex && storage.splice(tableRowIndex, 1);
      localStorage.setItem("users", JSON.stringify(storage));
      window.location.reload();
      console.log(storage);
    } else {
      return;
    }
  } else {
    return false;
  }
};