const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);

function onValidationInput(evt) {
  const event = evt.currentTarget;
  event.classList.remove('invalid', 'valid');

  if (event.value.length === Number(event.dataset.length)) {
    event.classList.add('valid');
    return;
  }
  event.classList.add('invalid');
}
