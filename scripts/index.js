const arrow_up_hour = document.getElementById('arrow-up-hour');
const arrow_down_hour = document.getElementById('arrow-down-hour');
const arrow_up_minute = document.getElementById('arrow-up-minutes');
const arrow_down_minute = document.getElementById('arrow-down-minutes');
const arrow_up_second = document.getElementById('arrow-up-seconds');
const arrow_down_second = document.getElementById('arrow-down-seconds');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let hours = document.getElementById('number-hours');
let minutes = document.getElementById('number-minutes');
let seconds = document.getElementById('number-seconds');
let countdown_finished = document.getElementById('countdown-finished');

// Flèches pour ajouter heures
arrow_up_hour.addEventListener('click', () => {
  hours.textContent = String(parseInt(hours.textContent) + 1);
  if (parseInt(hours.textContent) > 23) {
    hours.textContent = '0';
  }
});

// Flèches pour retirer heures
arrow_down_hour.addEventListener('click', () => {
  hours.textContent = String(parseInt(hours.textContent) - 1);
  if (parseInt(hours.textContent) < 0) {
    hours.textContent = '23';
  }
});

// Flèches pour ajouter minutes
arrow_up_minute.addEventListener('click', () => {
  minutes.textContent = String(parseInt(minutes.textContent) + 1);
  if (parseInt(minutes.textContent) > 59) {
    minutes.textContent = '0';
  }
});

// Flèches pour retirer minutes
arrow_down_minute.addEventListener('click', () => {
  minutes.textContent = String(parseInt(minutes.textContent) - 1);
  if (parseInt(minutes.textContent) < 0) {
    minutes.textContent = '59';
  }
});

// Flèches pour ajouter secondes
arrow_up_second.addEventListener('click', () => {
  seconds.textContent = String(parseInt(seconds.textContent) + 1);
  if (parseInt(seconds.textContent) > 59) {
    seconds.textContent = '0';
  }
});

// Flèches pour retirer secondes
arrow_down_second.addEventListener('click', () => {
  seconds.textContent = String(parseInt(seconds.textContent) - 1);
  if (parseInt(seconds.textContent) < 0) {
    seconds.textContent = '59';
  }
});

// Fonction pour démarrer le compte à rebours
let countdownInterval;
start.addEventListener('click', () => {
  if (countdownInterval) return; // Empêche de démarrer plusieurs fois
  countdownInterval = setInterval(() => {
    if (parseInt(seconds.textContent) > 0) {
      seconds.textContent = String(parseInt(seconds.textContent) - 1);
    } else if (parseInt(minutes.textContent) > 0) {
      minutes.textContent = String(parseInt(minutes.textContent) - 1);
      seconds.textContent = '59';
    } else if (parseInt(hours.textContent) > 0) {
      hours.textContent = String(parseInt(hours.textContent) - 1);
      minutes.textContent = '59';
      seconds.textContent = '59';
    } else {
      clearInterval(countdownInterval);
      countdownInterval = null;
      countdown_finished.textContent = 'Le compte à rebours est terminé !';
    }
  }, 1000);
});

// Fonction pour arrêter le compte à rebours
stop.addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
});

// Fonction pour réinitialiser le compte à rebours
reset.addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
  hours.textContent = '0';
  minutes.textContent = '0';
  seconds.textContent = '0';
});