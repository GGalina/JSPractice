const ref = {
    decrementBtnEl: document.querySelector(`[data-action="decrement"]`),
    incrementBtnEl: document.querySelector(`[data-action="increment"]`),
    valueDisplayEl: document.querySelector(`#value`),
    counter: {
        value: 0,   //store the current counter value 
        decrement() {
            return this.value -= 1;
        },
        increment() {
            return this.value += 1
        }
    }
};

const { decrementBtnEl, incrementBtnEl, valueDisplayEl, counter } = ref;

decrementBtnEl.addEventListener(`click`, () => {
    counter.decrement();    //decrease the value of the counter.
    valueDisplayEl.textContent = counter.value; //update the interface with the new value 
});

incrementBtnEl.addEventListener(`click`, () => {
    counter.increment();    //increase the value of the counter.
    valueDisplayEl.textContent = counter.value; //update the interface with the new value 
});
