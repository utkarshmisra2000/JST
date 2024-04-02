// Immediately Invoked Function Expressions (IIFE)

function one(){
    console.log("DB connected");
}
one();

(function two(){
    // named IIFE
    console.log("IIFE");
})();

( () => {
    // Unnamed IIFE
    console.log(`IIFE arrow function`);
})();
( (username) => {
    console.log(`IIFE arrow function ${username}`);
})("utkarsh.mishra")