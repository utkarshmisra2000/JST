// array

const arr = [0, 1, 2, 3, 4, 5];
console.log(arr[3]);

arr.push(6);
arr.pop();

arr.unshift(4);
arr.shift(4);
console.log(arr);

console.log("a ", arr);

const arr1 = [1, 2,3, 4, 5, 6,[1,2,3],7,[1,2,3,4]];
console.log(arr1.flat());

const arr2 = [2,3,4,1,2,1];
console.log((arr1.flat()).concat(arr2));

console.log(arr2.includes(6));
console.log(arr2.indexOf(3));
console.log(Array.from("Utkarsh"));
