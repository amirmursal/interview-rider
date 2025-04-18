/**
 * What is a closure?
 * Closures are functions that have access to the parent scope
 * // A closure is created when a function is defined inside another function.
 * // The inner function has access to the outer function's variables and parameters.
 * // Closures are useful for data hiding and encapsulation.
 * // Closures are also used to create private variables and methods.
 */

function outerFunction() {
  let outerVariable = "I am an outer variable";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer function
  }

  return innerFunction; // Returning the inner function
}

const closureFunction = outerFunction(); // Creating a closure
closureFunction(); // Output: I am an outer variable
