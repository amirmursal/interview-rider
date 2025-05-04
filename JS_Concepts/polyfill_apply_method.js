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

function displayData(age) {
  console.log(`This is his name ${this.data} with age ${age}`);
}

const userData = {
  data: "Amir",
};

//displayData.apply(userData, [34]);

Function.prototype.customApply = function (thisArgs, argsArray) {
  return this.bind(thisArgs, argsArray)();
};

displayData.customApply(userData, [25]);
