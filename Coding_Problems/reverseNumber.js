// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join(''))* Math.sign(n);
}

reverseInt(-51);

const p1 = new Promise(function(resolve, reject){
    if(data){
        resolve(data)
    }
    if(error){
        reject(error);
    }
})



const getData = async()=>{
const data = await p1;
}



