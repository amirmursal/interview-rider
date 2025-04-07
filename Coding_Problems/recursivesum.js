// how to solve sum(1)(2)(5)(6)() // sum of all these

const sum = a=> b=> b ? sum(a+b) : a;   

const totalSum= sum(1)(2)(6)();

console.log(totalSum);