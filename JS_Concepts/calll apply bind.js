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

