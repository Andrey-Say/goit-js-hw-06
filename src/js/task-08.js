const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

const userInfo = {};

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  email === '' || password === ''
    ? alert('Fields must be completed')
    : (userInfo.email = email),
    (userInfo.password = password);

  event.currentTarget.reset();
}
console.log(userInfo);
