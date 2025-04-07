const user ={
    "id": 1,
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "profile": {
      "age": 30,
      "gender": "male",
      "bio": "Software developer with a passion for coding.",
         },
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zipcode": "10001",
      "country": "USA"
    },
    "contact": {
      "phone": {
        "home": "555-1234",
        "mobile": "555-5678"
      },
      "social": {
        "twitter": "@johndoe",
        "linkedin": "linkedin.com/in/johndoe"
      }
    },
    "settings": {
      "language": "en",
      "notifications": {
        "email": true,
        "sms": false,
        "push": true
      }
    }
  }
let finalObject = {};
const getFormattedObject =(inputObject, parentKey)=>{
   for( key in inputObject){
    if(typeof inputObject[key] === 'object'){
        getFormattedObject(inputObject[key], `${parentKey}_${key}`);
    }else{
        finalObject[`${parentKey}_${key}`] = `${inputObject[key]}`
    }
   }
}

getFormattedObject(user, "user");
console.log(finalObject);
    