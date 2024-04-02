const user ={
    username : "Utkarsh",
    price: 400,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to XYZ`);
        console.log(this);
    }
}
user.welcomeMessage()
console.log(this);

function ok(){
    const user = "google"
    console.log(this.google);
}
ok()


const one =() =>{
    const user = "user";
    console.log(this);
}
one()

const addTwoNum = (num1, num2) => {
    return num1+num2
}

console.log(addTwoNum(10, 20));

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(1,4));