// what is promis? Its an empty object that holds a value of aysc operation value that will evantually get completed.

const cart = ["shoes","pants", "Tshirt"];

// intial flow like this

// createOrder-> processdToPayment-> showordersummary-> updateWallet

//using callback these will depened on each other does not gurrent they gets call or not here comes the promis
// promis has there state pending. fullfill, rejetced

createOrder.then(function(data){
  return  console.log(data);
})


function processdToPayment (){
    return Promise(function(reslove, rejetced){
        
    })
}
function createOrder(cart){
    const pr = new Promise(function(resolove, rejetced){

        if(!validateCart(cart)){
            const err = new Error("Cart is empty")
            rejetced(err)
        }
        const orderID ="11";
        if(orderID){
            resolove(orderID)
        }
    })
}

function validateCart(cart){
    return true;
}