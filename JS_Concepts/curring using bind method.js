
function multiply (x, y){
     return x*y;
}

const multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(3));
