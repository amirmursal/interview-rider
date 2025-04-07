/* what is a promise?*/
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is a placeholder for a value that will be available in the future.
// A promise is a way to handle asynchronous operations in JavaScript.
// A promise is a way to avoid callback hell in JavaScript.
// A promise is a way to handle errors in asynchronous operations in JavaScript.
// A promise is a way to handle multiple asynchronous operations in JavaScript.
// A promise is a way to handle asynchronous operations in a more readable and maintainable way.
// A promise is a way to handle asynchronous operations in a more elegant way.

const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve(5);
  } else {
    reject(4);
  }
});

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

/* What is promise.all? */
// Promise.all is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved,
// or rejects when any of the promises in the array have rejected.
// Promise.all is a way to handle multiple asynchronous operations in parallel.

const promise1 = new Promise((resolve) => resolve(4));
const promise2 = new Promise((_resolve, reject) => reject("error occured"));
const promise3 = new Promise((resolve, _reject) => resolve(7));

// Promise.all([promise2, promise1, promise3])
//   .then((result) => console.log(result)) // [4, 7] //[promise1, promise3]
//   .catch((error) => console.log(error)); // error occured // [promise2]

// what is promise.allSettled?
// Promise.allSettled is a method that takes an array of promises and returns a single promise
// that resolves when all of the promises in the array have settled (either resolved or rejected).
// It returns an array of objects that each describe the outcome of each promise in the array.
// Promise.allSettled is a way to handle multiple asynchronous operations in parallel and get the outcome of each operation.
// It is useful when you want to know the outcome of each operation, regardless of whether it succeeded or failed.

// Promise.allSettled([promise2, promise1, promise3])
//   .then((result) => {
//     console.log(result); // [  { status: 'rejected', reason: 'error occured' },  { status: 'fulfilled', value: 4 },  { status: 'fulfilled', value: 7 }]
//   })
//   .catch((error) => console.log(error));

//what is promise.any?
// Promise.any is a method that takes an array of promises and returns a single promise that resolves
//  when any of the promises in the array have resolved.
// It rejects if no promises in the array have resolved (i.e., all of the promises have rejected).
// Promise.any is a way to handle multiple asynchronous operations in parallel and get the first successful result.
// It is useful when you want to know the first successful operation, regardless of whether other operations succeeded or failed.

// Promise.any([promise1, promise2, promise3])
//   .then((result) => console.log(result)) // 4 // Promise.any([promise1, promise2, promise3])
//   .catch((error) => console.log(error)); //  [errors]: [ 'error occured' ] // Promise.any([ promise2]);

// what is promise.race?
// This returned promise settles with the eventual state of the first promise that settles.
// It is useful when you want to know the first operation to complete, regardless of whether it succeeded or failed.

Promise.race([promise2, promise3])
  .then((result) => console.log(result)) //4 //Promise.race([promise1, promise2, promise3])
  .catch((error) => console.log(error)); //error occured //Promise.race([promise2, promise3])
