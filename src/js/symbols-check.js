const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, onFieldBlur);

function onFieldBlur(event) {

    if (event.target.value.length === Number(event.target.dataset.length)) {
        //if length valid 
        event.target.classList.add(`valid`); // add style class for valid length of input
        event.target.classList.remove(`invalid`); //if exists remove incorrect style class
    } else if (event.target.value.length === 0) { //if field is empty
        event.target.classList.remove(`valid`); // add style class for empty input
        event.target.classList.remove(`invalid`);
    } else { //if length invalid 
        event.target.classList.remove(`valid`); //remove style class for valid input
        event.target.classList.add(`invalid`);   //add style class for invalid input
    }
};