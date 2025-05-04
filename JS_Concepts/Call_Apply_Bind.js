// what is bind, call and apply in js?
// call, apply, and bind are JavaScript function methods that let you control the this context
// when invoking a function — especially useful when you want to borrow or reuse methods across different objects.

const user = {
  name: "amir",
};

function getName(a) {
  console.log(`${this.name} is ${a} years old`);
}
const age = 10;
// getName.call(user, age);
// getName.apply(user, [age]);

const test = getName.bind(user, age);

test();
