setInterval(() => {
  const now = new Date();
  const clock = document.querySelector("#clock");
  const perfectTime = (timeElement) =>
    timeElement < 10 ? `0${timeElement}` : timeElement;
  const hours = perfectTime(now.getHours());
  const minutes = perfectTime(now.getMinutes());
  const seconds = perfectTime(now.getSeconds());
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
