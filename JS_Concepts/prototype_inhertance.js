// let object1 = {
//     name:"Amir",
//     city: "Pune",
//     getIntro: function (){
//         return this.name+ " from " + this.city;
//     }
// }

// let object2 = {
//     name: "Mursal"
// }

// object2.__proto__ = object1;
// console.log(object2.getIntro());

function GetData (){
    console.log("Hi");
}

GetData.prototype.getData = function (){
    console.log("Hello")
};

const test = new GetData();

test.getData();



