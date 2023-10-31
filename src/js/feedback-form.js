import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.feedbackForm');
const storedData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
    email: '',
    message: ''
};

formEl.email.value = storedData?.email;
formEl.message.value = storedData?.message;

const onInput = event => {
    try {
        storedData[event.target.name] = event.target.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(storedData));
    } catch (error) {
        console.error("Set state error: ", error.message);
    };
};

formEl.addEventListener('input', throttle(onInput, 500));

const onSubmit = event => {
    event.preventDefault();
    console.log(storedData);
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
    storedData.email = '';
    storedData.message = '';
    Notify.success(`Message sent successfully`);
};

formEl.addEventListener(`submit`, onSubmit);
