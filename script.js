const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

// validtae email
function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // re.test(email) will return true if email pass regax validaton and if not it will return false
  if (!re.test(email.value)) {
    showError(email, 'Looks like this is not an email');
  }
};

// Error messege
function showError(input, message) {
  // we grab parent element of that specific input filed and give it a class error for red border and warning img with error message
  const inputWrapper = input.parentElement;
  inputWrapper.classList.add('error');
  const errorMessage = inputWrapper.querySelector('.error_message');
  errorMessage.innerHTML = message;
};

// capitalize error message
function getErrorMessage(input) {
  return input.id[0].toUpperCase() + input.id.slice(1);
};

// check requied
function checkRequired(inputArray) {
  inputArray.forEach(input => {
    if (input.value === '') {
      showError(input, `${getErrorMessage(input)} cannot be empty!`);
    }
  });
};

// submit event for form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkEmail(email);
  checkRequired([firstname, lastname, email, password]);
});


function removeError(inputArr) {
  inputArr.forEach(input => {
    input.parentElement.classList.remove('error');
  })
}

// when clicked outside of the form => hide error class
document.body.addEventListener('click', function(e) {
  if (e.target.nodeName !== 'FORM' && e.target.nodeName !== 'INPUT') {
    const inputWrapper = document.querySelectorAll('.input_wrapper input');
    removeError([...inputWrapper]);
  }
})

// when clicked inside error input to hide error class
const allInputs = document.querySelectorAll('.input_wrapper input')
  allInputs.forEach(input => {
    input.addEventListener('click', function(e) {
      input.parentElement.classList.remove('error');
  });
});
