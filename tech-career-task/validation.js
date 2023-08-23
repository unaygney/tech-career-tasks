const form = document.getElementById('form');
const username = document.getElementById('name');
const number = document.getElementById('number')
const email = document.getElementById('email');
const message = document.getElementById('message');

// form error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('.error-message'); // . added before 'error-message'
  small.innerText = message;
}

// form success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// check required
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`); 
    } else {
      showSuccess(input);
    }
  });
}

// Check email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check length
function checkLength(input, min, max) {
  const valueLength = input.value.trim().length;
  if (valueLength < min) {
    showError(input, `Must be at least ${min} characters`);
  } else if (valueLength > max) {
    showError(input, `Must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Form add event listener
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, message , number]);
  checkEmail(email);
  checkLength(username, 3, 15);
});
