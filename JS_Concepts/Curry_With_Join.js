/**
 * You are given a function func that accepts a fixed number of arguments.
 * Your task is to implement a higher-order function called curry that transforms func into a curried version of itself.
 * The curried function should support partial application of arguments across multiple function calls.
 *  Once enough arguments are provided to satisfy the original function's arity (func.length),
 * it should invoke the original function and return the result.
 * Example:
 * const curriedJoin = curry(join)
 * curriedJoin(1, 2, 3) // '1_2_3'
 * curriedJoin(1)(2, 3) // '1_2_3'
 * curriedJoin(1, 2)(3) // '1_2_3'
 */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...moreargs) => curried(...moreargs, ...args);
    }
  };
}

const join = function (a, b, c) {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));
