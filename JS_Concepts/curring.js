/**
 * What is currying?
 * Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and modular code.
 * It is a way to transform a function that takes multiple arguments into a series of functions that each take a single argument.
 * This allows for partial application of functions and can lead to more reusable and modular code.
 */

//Example of a simple curried function
function add(a) {
  return function next(b) {
    if (b !== undefined) {
      return add(a + b);
    } else {
      return a;
    }
  };
}

function x(a) {
  return function (b) {
    return a + b;
  };
}
// Usage of the curried function
console.log(x(10)(2)); // Outputs: 12
console.log(add(10)()); // Outputs: 10
console.log(add(5)(10)(16)()); // Outputs: 31
