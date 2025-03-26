document.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById("start");
  const pause = document.getElementById("pause");
  const reset = document.getElementById("reset");
  const timer = document.getElementById("timer");

  let timerValue = 0;
  let timerID = null;
  let isTimerRunning = false;

  start.addEventListener("click", () => {
    if (!isTimerRunning) {
      timerID = setInterval(() => {
        timer.textContent = timerValue++;
      }, 1000);
      isTimerRunning = true;
    }
  });

  pause.addEventListener("click", () => {
    clearInterval(timerID);
    isTimerRunning = false;
  });

  reset.addEventListener("click", () => {
    clearInterval(timerID);
    timerValue = 0;
    timer.textContent = 0;
    isTimerRunning = false;
  });
});
