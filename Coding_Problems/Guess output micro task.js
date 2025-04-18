/*console.log(1);

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

console.log(6);*/
