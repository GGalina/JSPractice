const { startBtnEl, stopBtnEl, bodyEl } = {
  startBtnEl: document.querySelector('button[data-start]'),
  stopBtnEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body')
};

let interval = null;
stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', startChangeBgColor);
stopBtnEl.addEventListener('click', stopChangeBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startChangeBgColor() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  interval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function stopChangeBgColor() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
  clearInterval(interval);
};