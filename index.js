const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const telNumber = document.getElementById('tel-number');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const secondNameValue = secondName.value.trim();
  const telNumberValue = telNumber.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  if(firstNameValue === '') {
    setErrorFor(firstName, 'Введите корректное имя');
  } else {
    setSuccessFor(firstName);
  }

  if(secondNameValue === '') {
    setErrorFor(secondName, 'Введите корректную фамилию');
  } else {
    setSuccessFor(secondName);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Адрес электронной почты не может быть пустым');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Введите корректный email');
  } else {
    setSuccessFor(email);
  }
  
  if(telNumberValue === '') {
    setErrorFor(telNumber, 'Номер телефона не может быть пустым');
  } else if (!isTel(telNumberValue)) {
    setErrorFor(telNumber, 'Введите номер телефона (не менее 10 символов)');
  } else {
    setSuccessFor(telNumber);
  }
  
  if(passwordValue === '') {
    setErrorFor(password, 'Введите корректный пароль (не менее 8 символов)');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  console.log(input, message);
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = 'input invalid';
  span.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'input success';
  const span = formControl.querySelector('span');
  span.innerText = '';
}
  
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTel(telNumber) {
  return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(telNumber);
}