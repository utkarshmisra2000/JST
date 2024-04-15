const nums =[1, 2, 3, 4, 5, 6, 7, 8, 9]

const val = nums.map( (num) => num+11);

// console.log(val);

const values = nums
                .map( (num) => num*10)
                .map( (num) => num+2)
                .filter( (num) => num>=51)
// console.log(values);

const value = nums.reduce( function(acc, currval) {
    console.log(`acc : ${acc}, currval : ${currval}`);
    return acc + currval
}, 0)

console.log(value);