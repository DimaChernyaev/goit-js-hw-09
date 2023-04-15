import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', submitCreatePromises);

function createPromise(position, delay) {

    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({position, delay});
        } else {
          reject({position, delay});
        }
      }, delay)
    })
  }


function submitCreatePromises(event) {
  event.preventDefault();

  let delayInputValue = Number(formEl.delay.value);
  let stepInputValue = Number(formEl.step.value);
  let amountInputValue = Number(formEl.amount.value);

    for (let i = 1; i <= amountInputValue; i += 1) {

      createPromise( i, delayInputValue).then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
      delayInputValue += stepInputValue;
    }
}