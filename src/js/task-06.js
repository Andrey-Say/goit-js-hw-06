const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);

function onValidationInput(evt) {
  evt.currentTarget.value.length <= evt.currentTarget.dataset.length
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}
