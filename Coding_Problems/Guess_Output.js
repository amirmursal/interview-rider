/**
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

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 1000);
}
// prints 5 times 5 why? Because var is function-scoped. By the time setTimeout runs, the loop has already completed and i = 5.
// in case of let it will print 01234

console.log(1);

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
