

const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]

function getValue(arr){
 return arr.flat(1);
} 
console.log(getValue(arr));
