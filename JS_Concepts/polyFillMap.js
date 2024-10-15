// check the current proto for map
// if not then create it
// will return array
// const arr = [];
// function myMap(element) {
//   if (!Array.prototype.map) {

//     arr.push(element + 1);

//     return arr;
//   }
// }

// const a = [1, 2, 3];
// console.log(a.myMap((it) => it + 1));

const obj = {
  a: [1, 2, 3],
  b: function () {
    console.log(this);
  },
};

//obj.b();
const a = obj.b;
a();
