// whats is Hoisting in javascript?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of
// their containing scope during the compile phase. This means that you can use variables
// and functions before they are declared in the code.

//console.log(a);
var a; // var is hoisted with undefined value
//console.log(b);
let b; // in case of let it is hoisted but not initilized
console.log(c);
const c = 1; // in case of const it is hoisted but not initilized
