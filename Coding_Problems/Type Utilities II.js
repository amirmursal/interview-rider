/*JavaScript is a dynamically typed language, which means the types of variable types can be changed during runtime. 
Many interview questions involve recursion of objects that can hold values of different types and how to handle each value type differs according to the type
 (e.g. different code is needed to iterate over an array vs an object). 
 Knowledge of handling the JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.

In Type Utilities, we have implemented utility functions to determine the types of primitive values. In this question,
we will implement the following utility functions to determine the types of non-primitive values.

isArray(value): Return true if value is an array, false otherwise.
isFunction(value): Return true if value is a function, false otherwise.
isObject(value): Return true if value is an object (e.g. arrays, functions, objects, etc, but not including null and undefined), false otherwise.
isPlainObject(value): Return true if value is a plain object, false otherwise (for arrays, functions, etc).
A plain object, or what is commonly known as a Plain Old JavaScript Object (POJO) is any object whose prototype is Object.prototype or an object created via Object.create(null).*/

const isArray = (value) => {
  return Array.isArray(value);
};

//console.log(isArray(1)); // false
//console.log(isArray([])); // true

const isFunction = (value) => {
  return typeof value === "function";
};

//console.log(isFunction(function () {})); // true
//console.log(isFunction("function")); // false

const isObject = (value) => {
  if (value === null) {
    return false;
  }
  return typeof value === "object";
};

// console.log(isObject(null)); // true
// console.log(isObject(undefined)); // false
// console.log(isObject([])); // true
// console.log(isObject(function () {})); // false
// console.log(isObject(new Map())); // true
// console.log(isObject(new Set())); // true

const isPlainObject = (value) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  return (
    Object.getPrototypeOf(value) === Object.prototype ||
    Object.getPrototypeOf(value) === null
  );
};

console.log(isPlainObject({})); //true
console.log(isPlainObject(new Object())); //true
console.log(isPlainObject(Object.create(null))); //true
console.log(isPlainObject([])); //false
console.log(isPlainObject(new Set())); //false
console.log(isPlainObject(new Map())); //false
console.log(isPlainObject(new Date())); //false
