//fizzBuzz(5);
// Output from console.log:
// 1
// 2
// fizz
// 4
// buzz

function displayFizzBuzz(num) {
  for (let counter = 1; counter <= num; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log("fizzbuzz");
    } else if (counter % 5 === 0) {
      console.log("buzz");
    } else if (counter % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(counter);
    }
  }
}

displayFizzBuzz(15);
