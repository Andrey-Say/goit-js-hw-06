const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);

function onValidationInput(evt) {
  const event = evt.currentTarget;
  // evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  //   ? inputEl.classList.add('valid')
  //   : inputEl.classList.add('invalid');

  if (event.value.length === Number(event.dataset.length)) {
    event.classList.remove('invalid');

    event.classList.add('valid');
    return;
  }
  event.classList.add('invalid');
}
