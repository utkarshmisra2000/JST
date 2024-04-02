function one(){
    const username = "Utkarsh";

    function two(){
        const website = "ABC";

        console.log(username);
    }
    // console.log(website);

    two()
}
one()

if(true){
    const user = "utkarsh";
    if(true){
        const website = " ABC";
        console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);


console.log(addOne(10));
function addOne(num){
    return num + 1; 
}

// console.log(addTwo(10));
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(10));