
const multiply = function (x){
    return function(y){
        return x*y;
    }
}
const multiplyByTwo = multiply(2)

console.log(multiplyByTwo(1));