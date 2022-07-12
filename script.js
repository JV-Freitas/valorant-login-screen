const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-button');
const togglePassword = document.querySelector('#togglePassword');
const input = document.querySelector('#password');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
};

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

const handleIcon = () => {
  togglePassword.setAttribute('class', 'bi togglePassword bi-eye-slash');
};

togglePassword.addEventListener('click', function () {
  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});

input.addEventListener('focus', handleIcon);
