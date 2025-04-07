/*Let's implement our own version of Promise.all(), a promiseAll function,
 with the difference being the function takes in an array instead of an iterable
 Example:

 const promise1 = new Promise ((resolve)=> resolve(5));
 const promise2 = 43;
 const promise3 =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(4)
        },300)
    });

await promisAll([promise1, promise2, promise3]) //  [5, 43, 4] 
 */

// few things should be note down here
// create a function which will take a array of promises as input
// if array is input it will return promise resolved empty array
// the returned array should maintain the same order of resolved values
// The returned Promise rejects immediately if any of the input values are rejected or throw an error.
// input array contain non promis values

const promise1 = new Promise((resolve) => resolve(5));
const promise2 = 43;
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(4);
  }, 0);
});

async function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolvedPCount = iterable.length;

    if (unresolvedPCount === 0) {
      resolve(results); // resolve promise if there is no unresolved promis left
      return;
    }
    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolvedPCount -= 1;
        if (unresolvedPCount === 0) { 
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

(async () => {
  const result = await promiseAll([promise1, promise2, promise3]);
  console.log(result); // [5, 43, 4]
})();
