function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // Outputs: 1
console.log(counter1()); // Outputs: 2
console.log(counter2()); // Outputs: 1
console.log(counter1()); // Outputs: 3
console.log(counter2()); // Outputs: 2

/**
 * Creates a new count variable, initialized to 0.
 * Returns an inner function that increments and returns count.
 * Because of closures, this returned function “remembers” the count variable from its own creation context.
 */
