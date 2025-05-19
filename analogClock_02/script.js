let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function displayTime() {
  let date = new Date();

  // Getting Hours, Minutes and Seconds from date
  let hr = date.getHours();
  let mn = date.getMinutes();
  let sc = date.getSeconds();

  // Calculating Hour, Minute and Second sticks rotation
  let hrRotation = 30*hr + mn/2;
  let mnRotation = 6*mn;
  let scRotation = 6*sc;

  hours.style.transform = `rotate(${hrRotation}deg)`;
  minutes.style.transform = `rotate(${mnRotation}deg)`;
  seconds.style.transform = `rotate(${scRotation}deg)`;
}

setInterval(displayTime, 1000);