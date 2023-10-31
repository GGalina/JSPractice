const {inputEl, outputEl} = {
    inputEl: document.querySelector(`#name-input`),
    outputEl: document.querySelector(`#name-output`),
};

inputEl.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    if (event.target.value !== "") {
        outputEl.textContent = event.target.value; //substitutes input value
    } else {
        outputEl.textContent = `Anonymous`; //if input is empty "Anonymous" string displayed
    }
};
