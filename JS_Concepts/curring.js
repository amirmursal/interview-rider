/**
 * What is currying?
 * Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and modular code.
 * It is a way to transform a function that takes multiple arguments into a series of functions that each take a single argument.
 * This allows for partial application of functions and can lead to more reusable and modular code.
 */

// Example of a simple curried function
function add(a) {
  let total = a;

  function inner(b) {
    total += b;
    return inner;
  }

  inner.valueOf = function () {
    return total;
  };

  inner.toString = function () {
    return total;
  };

  return inner;
}

// Usage of the curried function
const add5 = add(5); // Returns a function that adds 5 to its argument
console.log(add5(10)); // Outputs: 15
console.log(add(5)(10)(16)); // Outputs: 15
