const name1 = {
    firstName: "AMir",
    LastName:  "Mursal"    
}

const printName = function (state, ra){
    return console.log(`${this.firstName} ${this.LastName} ${state} ${ra}`);
}

printName.call(name1, "MH", "call");
printName.apply(name1, ["HM", "call"])

const test = printName.bind(name1,"MH", "call");
test();

// bind will create a new function then dev can call as an when required
// call withh take second arguments as many as you can
// apply wiill take second argument as array of arguments
