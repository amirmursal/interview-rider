/* 
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'*/

// Curry function implementation
function curry(func) {
  return function curried(...args) {
    // Check if the number of arguments is sufficient
    if (args.length >= func.length) {
      // If sufficient, call the original function
      return func(...args);
    } else {
      // If not sufficient, return a function that collects more arguments
      return function (...moreArgs) {
        // Recursively call curried with the accumulated arguments
        return curried(...args, ...moreArgs);
      };
    }
  };
}

// Join function
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

// Create a curried version of the join function
const curriedJoin = curry(join);

// Testing the curried function
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
