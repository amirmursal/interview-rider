/**
 * Question 1
 * Creates a new count variable, initialized to 0.
 * Returns an inner function that increments and returns count.
 * Because of closures, this returned function “remembers” the count variable from its own creation context.
 */

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

// console.log(counter1()); // Outputs: 1
// console.log(counter1()); // Outputs: 2
// console.log(counter2()); // Outputs: 1
// console.log(counter1()); // Outputs: 3
// console.log(counter2()); // Outputs: 2

// Question 2
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 1000);
}
// prints 5 times 5 why? Because var is function-scoped. By the time setTimeout runs, the loop has already completed and i = 5.
// in case of let it will print 01234
console.log(1);

// Question 3
const prom = new Promise((res, rej) => {
  console.log(2);

  setTimeout(() => {
    console.log(3);
    res(7);
  }, 10);

  console.log(4);
});

setTimeout(() => {
  console.log(5);
}, 0);

prom.then((res) => {
  console.log(res);
});

prom
  .then((res) => {
    console.log(res);
    return res + 1;
  })
  .then((res) => console.log(res));

console.log(6);
/**
 * console.log(1);
➝ prints 1

Create a Promise:

console.log(2);
➝ prints 2

Inside setTimeout(...), nothing prints yet (scheduled for later).

console.log(4);
➝ prints 4

setTimeout(() => console.log(5), 0);
➝ Scheduled, not run yet.

prom.then(...) is registered (doesn’t run yet since the promise is still pending due to the setTimeout).

console.log(6);
➝ prints 6

🔁 Event Loop Begins
setTimeout(() => console.log(5), 0);
➝ prints 5

After ~10ms: setTimeout(() => { console.log(3); res(7); }, 10);
➝ prints 3
➝ promise is resolved with 7

Now the .then() handlers execute in microtask queue:

a. First .then(res => console.log(res))
➝ prints 7

b. Second .then(res => { console.log(res); return res + 1; })
➝ prints 7

c. Next .then(res => console.log(res))
➝ prints 8
 */
// 1 2 4 6 5 3 7 7 8

// Question 4

let x = {
  i: 1,
  valueOf: function () {
    return this.i++;
  },
};

if (x == 1 && x == 2 && x == 3) {
  console.log("Hello World");
} else {
  console.log("GoodBye World");
}

//what will be the value of x if I want to print hello world
/*
 JavaScript performs type coercion when using ==. When an object is compared with a number, 
 JavaScript calls the valueOf() method of the object. 
 We use this to return a different value each time the object is compared, thanks to this.i++
*/

// Question 5
var length = 40;
function getLength() {
  console.log(this.length); // 3
}
const data = [getLength, "A", "0"];
data[0](this); // This is equivalent to getLength.call(data, this);

// Question 6
const obj = {};

function transform(data) {
  data.name = "amir"; // modifies the original object
  data = null; // reassigns the local parameter
  return data; // returns null
}

const newObj = transform(obj);
console.log({ obj, newObj }); // {  obj: { name: 'amir' },  newObj: null}

// Question 7

console.log("hello [1]");

setTimeout(() => console.log("hello [2]"), 0);

setTimeout(() => console.log("hello [3]"), 0);

const p = Promise.resolve();

for (let i = 0; i < 3; i++) {
  p.then(() => {
    setTimeout(() => {
      console.log("hello [4]");
      setTimeout(() => console.log("hello [5]"), 0);
      p.then(() => console.log("hello [6]"));
    }, 0);
    console.log("hello [7]");
  });
}

console.log("hello [8]");
/* output
hello[1]; // synchronous
hello[8]; // synchronous
hello[7]; // microtask 1
hello[7]; // microtask 2
hello[7]; // microtask 3
hello[4]; // macrotask from first .then
hello[4]; // macrotask from second .then
hello[4]; // macrotask from third .then
hello[6]; // microtask within first .then setTimeout
hello[6]; // second
hello[6]; // third
hello[5]; // macrotask from first .then
hello[5]; // second
hello[5]; // third
hello[3]; // original setTimeout
hello[2]; // original setTimeout*/
