const fontSizeControlEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onControlFontSize);

function onControlFontSize(evt) {
  spanText.style.fontSize = `${evt.currentTarget.value}px`;
}
