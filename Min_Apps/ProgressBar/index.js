document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progressbar");

  let initialProgress = 0;
  let isRunning = false;
  let timer = null;

  const startButton = document.getElementById("start-btn");
  const pauseButton = document.getElementById("pause-btn");
  const stopButton = document.getElementById("stop-btn");
  const startProgress = () => {
    if (!isRunning) {
      timer = setInterval(() => {
        if (initialProgress === 100) {
          stopProgress();
        }
        progressBar.style.width = `${(initialProgress += 10)}%`;
      }, 1000);
      isRunning = true;
    }
  };

  const stopProgress = () => {
    isRunning = false;
    clearInterval(timer);
    progressBar.style.width = `0%`;
    initialProgress = 0;
  };

  const pauseProgress = () => {
    isRunning = false;
    clearInterval(timer);
  };

  startButton.addEventListener("click", startProgress);
  pauseButton.addEventListener("click", pauseProgress);
  stopButton.addEventListener("click", stopProgress);
});
