// debouncing is trigger a callback function after specific time
// throttle is triggle a callback function after specific time but if it will ignore all the events triggers in btween time

const getData = () => {
  console.log("fetching data...");
};

const throttle = (fn, delay) => {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      fn.apply(this, args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
};

const getDataWrapper = throttle(getData, 3000);

window.addEventListener("resize", getDataWrapper);
