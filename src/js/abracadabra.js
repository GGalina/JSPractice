const { inputEl, textEl } = {
    inputEl: document.querySelector(`#font-size-control`),
    textEl: document.querySelector(`#text`)
};

inputEl.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = event.currentTarget.value + `px`; //match input value to size of the text
};