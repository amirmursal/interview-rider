/**
 * - **Debouncing**: This technique ensures that a function is executed only after a certain period of time.
 * For example, if a user is typing in an input field, the debounced function will only be called after the user stops typing
 * for a specified duration. This is useful for optimizing performance in scenarios like search input or window resize events.
 */

function debounce(callBackfunc, wait = 0) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callBackfunc.call(this, args);
    }, wait);
  };
}
function test() {
  console.log("H");
}

const wrapperDebounce = debounce(test, 300);

wrapperDebounce();
