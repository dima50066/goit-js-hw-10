import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const datetimePicker = document.getElementById('datetime-picker');
  const startButton = document.querySelector('button[data-start]');
  const daysSpan = document.querySelector('span[data-days]');
  const hoursSpan = document.querySelector('span[data-hours]');
  const minutesSpan = document.querySelector('span[data-minutes]');
  const secondsSpan = document.querySelector('span[data-seconds]');
  let timerInterval;
  let userSelectedDate;

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
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

  function updateTimerDisplay({ days, hours, minutes, seconds }) {
    daysSpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);
  }

  function startCountdown() {
    timerInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = userSelectedDate - now;

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        iziToast.info({
          title: 'Timer',
          message: 'Time is up!',
          position: 'topRight',
        });
      } else {
        const time = convertMs(timeRemaining);
        updateTimerDisplay(time);
      }
    }, 1000);
  }

  flatpickr(datetimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate <= new Date()) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
          position: 'topRight',
        });
        startButton.disabled = true;
      } else {
        userSelectedDate = selectedDate;
        startButton.disabled = false;
      }
    },
  });

  startButton.addEventListener('click', () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    startCountdown();
    startButton.disabled = true;
  });
});
