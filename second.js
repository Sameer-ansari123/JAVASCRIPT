let marks = [98,85,78,69,84,58,95,52];

let sum =0;

for ( let value of marks){
    sum += value;
}

let avg = sum /marks.length
console.log(`avg marks of the class = ${avg}`);

let cities = ["mumbai","pune","hydrabad","malegaon","nashik"];
for (let city of cities){
    console.log(city.toUpperCase());
}
let text = "sameer ansari"
console.log(text);

let arr =[1,2,3,4,5,6,8,9];
console.log(arr.slice(1,5));

let fruit = ["apple","mango", "graphs","banana"];
let vegetables = ["tomato","potato","carrot","lemon"];

let foodItem =fruit.concat(vegetables);
console.log(foodItem);

function myfunction(){
    console.log("welcome toour college");
    console.log("we are the learning javascript");
}
myfunction();

function sum(a,b){
    console.log(a+b); 
    return sum;
    console.log("a-b");//not print    
}
let val = sum (3,8);
console.log(val); 