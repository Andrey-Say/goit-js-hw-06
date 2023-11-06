const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(evt) {
  if (spanEl.textContent === ''.trim()) {
    return (spanEl.textContent = 'Anonymous');
  }
  spanEl.textContent = evt.currentTarget.value.trim();
}
