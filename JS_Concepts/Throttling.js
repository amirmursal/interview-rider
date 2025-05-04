// debouncing is trigger a callback function after specific time
// throttle is triggle a callback function after specific time but if it will ignore all the events triggers in between time
// This technique ensures that a function is executed at most once in a specified time interval.
// For example, if a user is scrolling a page, the throttled function will only be called once every specified duration,
// regardless of how many times the scroll event occurs.
// This is useful for optimizing performance in scenarios like scroll events or window resizing.

function throttle(func, delay) {
  let isThrottled = false;
  return function (...args) {
    if (isThrottled) return;

    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

function getData() {
  console.log("Getting data");
}

const wrapperThrottle = throttle(getData, 3000);
window.addEventListener("resize", wrapperThrottle);
