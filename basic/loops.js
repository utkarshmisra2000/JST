for (let i=0;i<10;i++){
    // console.log(i);
    if(i==6){
        console.log("Dhoni finishs off in his style");
    }
}

for (let i = 0; i < 10; i++) {
    // console.log("Bahar aao");
    for (let j = 0; j <= i; j++) {
        
        // console.log("andar jao");
    }
    
}

let i=0;
while (i<10) {
    // console.log("hi there");
    i++;
}


let arr = ['one', 'two', 'three']
let j=0
while (j<arr.length) {
    console.log(arr[j]);
    j++
}
let con =1
do {
    console.log(con);
    con++
} while (con>10);


// for of loop

const array = [1,2,3,4,5];

for (let i of array) {
    console.log(i);
}

const map = new Map()
map.set('NEP', "NEPAL")
map.set('BHU', "BHUTAN")
map.set('SLK', "SRI LANKA")

console.log(map);

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}

// for in loop

let object = {
    1: "one",
    2: "two",
    3: "three",
    4: "four"
}

for (const key in object) {
    console.log(`${key} in alphabet is ${object[key]}`);
}



// for each loop

let Name = ["utkarsh", "vashu", "dev"];

Name.forEach( function (val){
    console.log(val);
})

Name.forEach((val)=>{
    console.log(val);
})


let myObj=[
    {
        name: "utkarsh",
        class: "11"
    },
    {
        name: "ayush",
        class: "11"
    },
    {
        name: "siddharth",
        class: "11"
    }
]

myObj.forEach( (val) => {
    console.log(`${val.name} is in class ${val.class}`);
})