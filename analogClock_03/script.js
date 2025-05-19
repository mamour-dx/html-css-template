setInterval(animateTime, 1000);

function animateTime() {
  let date = new Date();

  const sec = document.getElementById("sec");
  let seconds = date.getSeconds();
  let scRotation = seconds / 60;
  sec.style.transform = "rotate(" + scRotation * 360 + "deg)";

  const min = document.getElementById("min");
  let minutes = date.getMinutes();
  let mnRotation = (minutes + scRotation) / 60;
  min.style.transform = "rotate(" + mnRotation * 360 + "deg)";

  const hour = document.getElementById("hour");
  let hours = date.getHours();
  let hrRotation = (hours + mnRotation) / 12;
  hour.style.transform = "rotate(" + hrRotation * 360 + "deg)";
}

animateTime();