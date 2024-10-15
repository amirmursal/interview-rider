
const name = {
    firstName:"Amir",
    LastName: "Mursal"
};

function printName (state, town){
    console.log(`${this.firstName} ${this.LastName} ${state}  ${town}`);
}

Function.prototype.customBind= function(...args){
let obj = this,
params = args.slice(1);
return function(...args2){
    obj.apply(args[0], [...params, ...args2])
}
}

const printCard = printName.customBind(name, 'MH');

printCard("indie");