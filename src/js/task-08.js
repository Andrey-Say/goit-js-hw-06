const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === ''.trim() || password === ''.trim()) {
    alert('Fields must be completed');
    return;
  }

  const userInfo = {};

  userInfo.email = email;
  userInfo.password = password;
  event.currentTarget.reset();
  return;
}
