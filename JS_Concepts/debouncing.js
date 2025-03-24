/**
 * Create a debounce funtion explain while doing it
 * It will eccute the function after the wait time lapsed
 */

function debounce(func, wait = 0) {
  let timer = null;
  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, wait);
  };
}
