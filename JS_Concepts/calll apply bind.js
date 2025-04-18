//what is bind, call and apply in js?
// call, apply and bind are methods in JavaScript that allow you to set the value of 'this' in a function.
// They are useful when you want to borrow methods from one object and use them in another object.
// call, apply and bind are methods in JavaScript that allow you to set the value of 'this' in a function.

const name = {
  firstName: "Amir",
  LastName: "Mursal",
};

const printName = function (state, ra) {
  return console.log(`${this.firstName} ${this.LastName} ${state} ${ra}`);
};

printName.call(name, "MH", "call"); // call will take first argument as object and second argument as many as you can
printName.apply(name, ["HM", "call"]); // apply will take first argument as object and second argument as array of arguments

const test = printName.bind(name, "MH", "call"); // bind will create a new function then dev can call as an when required
test(); // bind will create a new function then dev can call as an when required
