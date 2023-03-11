import { throttle } from 'lodash';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');


saveForm();

form.addEventListener('input', throttle(dataForm, 500));
form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

function dataForm() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};



function saveForm() {
  let saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (saveData) {
    email.value = saveData.email;
    message.value = saveData.message;
  }
};



//==============================================================================

//  throttle,
//  submit, 
//  stringify,
//  parse

//=============================================================================

// const form = document.querySelector("#message-form");
// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }

//============================================================================

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

//============================================================================

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
