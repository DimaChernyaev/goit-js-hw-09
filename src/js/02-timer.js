import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startButton = document.querySelector('[data-start]');
startButton.addEventListener('click', startСountdown);
let selectedTime = 0;
let id = null;
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    const currentTime = Date.now();

    if(currentTime > selectedTime) {
        Notify.failure(`❌ Please choose a date in the future`);
        return
    } 
    startButton.disabled = false;
    return selectedTime;
  },
};

flatpickr('#datetime-picker', options);

function addPadStart(element) {
    return String(element).padStart(2, 0)
}

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

function startСountdown(event) {

  if(event.target.tagName === 'BUTTON') {
    id = setInterval(() => {
    const dateDifference = -(Date.now() - selectedTime);
    const { days, hours, minutes, seconds } = convertMs(dateDifference);
      document.querySelector('[data-days]').textContent = addPadStart(days);
      document.querySelector('[data-hours]').textContent = addPadStart(hours);
      document.querySelector('[data-minutes]').textContent = addPadStart(minutes);
      document.querySelector('[data-seconds]').textContent = addPadStart(seconds);

      if (Date.now() >= selectedTime) {
        clearInterval(id);
        Notify.success(`✅ Finished`);
        document.querySelector('[data-days]').textContent = '00';
        document.querySelector('[data-hours]').textContent = '00';
        document.querySelector('[data-minutes]').textContent = '00';
        document.querySelector('[data-seconds]').textContent = '00';
        startButton.disabled = true;
      }
    }, 1000)
  }


}

