/**
 * Throttling indicates that it will excecute the function after certion period of time
 */
function throttle(callBackFunc, wait) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }
    let context = this;
    shouldThrottle = true;

    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    callBackFunc.apply(context, args);
  };
}

function getData() {
  console.log("In Get Data");
}

throttle(getData, 100);
