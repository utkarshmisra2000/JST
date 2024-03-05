// Primitive datatypes(call by value)

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// javascript is dynamically typed language.

// Reference Type

// Array, Objects, Functions

const bigNum = 8451245124152451n;

console.log(typeof bigNum);








// MEMORIES........

// two types : Stack(Primitive) and Heap(Reference).

let myName = "Utkarsh"
let yourName = myName

yourName = "Ayush";

console.log(myName, yourName);


let app1 = {
    id: 10,
    name: "utkarsh"
}

let app2 = app1;

app2.name = "Ayush";

console.log(app1);
console.log(app2);