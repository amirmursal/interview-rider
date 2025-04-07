/**
 * what is the apply method?
 * The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
 */

/*function testApply(mutlipler) {
  const age = this.age;
  return age * mutlipler;
}

const user = { age: 25 };

console.log(testApply.apply(user, [78]));*/

function testApply(mutlipler) {
  const age = this.age;
  return age * mutlipler;
}

const user = { age: 25 };

Function.prototype.customAppy = function (thisArgs, argsArray) {
  //return this.call(thisArgs, ...argsArray); // using call method
  return this.bind(thisArgs, ...argsArray)(); // using bind method
};

console.log(testApply.customAppy(user, [78]));
