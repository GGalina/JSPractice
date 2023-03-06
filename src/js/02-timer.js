import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const {inputFieldEl, startBtnEl, daysEl, hoursEl, minutesEl, secondsEl, timerContainerEl} = {
    inputFieldEl: document.querySelector('input#datetime-picker'),
    startBtnEl: document.querySelector('button[data-start]'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
    timerContainerEl: document.querySelector('.timer')
};

timerContainerEl.style.display = "flex";
timerContainerEl.style.justifyContent = "center";
timerContainerEl.style.gap = "40px";
timerContainerEl.style.fontSize = "36px";

startBtnEl.disabled = true;
startBtnEl.addEventListener('click', startCountdown);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            startBtnEl.disabled = true;
            Notify.failure('Please choose a date in the future');
            return;
        }
        startBtnEl.disabled = false;
    }
};

flatpickr(inputFieldEl, options);

function startCountdown() {
    inputFieldEl.disabled = true;
    startBtnEl.disabled = true;
    const interval = setInterval(() => {
        let selectedDates = inputFieldEl.value;
        let currentTime = new Date();
        let countdownTime = Date.parse(selectedDates) - Date.parse(currentTime);
        const { days, hours, minutes, seconds } = convertMs(countdownTime);
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            Notify.success('Heyyy! The time for important stuff has come!');
            clearInterval(interval);
        }
        updateTime({ days, hours, minutes, seconds });
    }, 1000);
};

function updateTime({ days, hours, minutes, seconds }) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}