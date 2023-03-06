import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector(`.form`);
const createBtnEl = document.querySelector("[type='submit']");

createBtnEl.addEventListener(`click`, displayPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
};

function displayPromise(event) {
  event.preventDefault();

  let delay = Number(formEl.delay.value);
  let step = Number(formEl.step.value);
  let amount = Number(formEl.amount.value);
  
  for (let position = 0; position < amount; position += 1) {
    createPromise(position + 1, delay + step * position)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
  };
};