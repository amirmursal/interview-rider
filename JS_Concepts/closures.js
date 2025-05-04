/**
 * What is a closure?
 * A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
 * This means that a closure can "remember" the variables from its outer function even after the outer function has finished executing.
 */

function out() {
  let a = 5;
  return function next() {
    console.log(a);
  };
}
const test = out();

test();
