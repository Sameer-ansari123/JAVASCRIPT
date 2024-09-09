const arrowMul = (a , b) =>{
    return a * b;
};

const printHEllo = () => {
    console.log("Hello") 
};

//
function countVowels (str) {
    let count = 0;
    for (const char of str) {
        if ( char === "a" || char === "e" || char === "i" || char ==="o" || char === "u") {
        count ++;
        }
        console.log (count); 
    }

}
//

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if ( char === "a" || char === "e" || char === "i" || char ==="o" || char === "u") {
        count ++;
        }
        console.log (count); 
    }
}
//

let arr = ["Mumbai", "Nashik", "Malegaon"];

arr.forEach ((val , idx ,arr) => {
    console.log(val , idx ,arr);
});

//
let nums = [1,25,7,5,2,4,5,4];
nums.forEach((num) => {
    console.log(num*num);
});

//
let n = prompt ("Enter a Number :");
    
let Arr  = [];

for (let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log (arr); 

let sum = arr.reduce((prev,curr) =>{
    return prev + curr;
});
console.log(sum);

let factorial = arr.reduce((prev,curr) =>{
    return prev * curr;
});
console.log(factorial);   