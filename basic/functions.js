function sayMyName(){
    console.log("U");
    console.log("T");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}
sayMyName()

// function addition(num1, num2){
//     console.log(num1+num2);
// }
function addition(num1, num2){
    let result =(num1+num2);
    return result; 
}

let result =addition(10, 11)
console.log("Result = ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
console.log( loginUserMessage("utkarsh"));

function addCartValue(...val1){
    return val1
}
console.log(addCartValue(100,200,300,400));


const user ={
    username: "Utkarsh",
    price: 200
}

function
handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)