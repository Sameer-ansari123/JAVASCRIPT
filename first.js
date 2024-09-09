// const student={
//     fullName :"sameer ansari",
//     age :'20',
//     cgpa: 9.9,
//     isPass: true, 
// }
// // arithematic operator 
// let a = 5;
// let b = 3;
// a++;
// console.log("a+b=", a+b);
// console.log(a-b);
// console.log(a*b);

//conditional statement 

// let age = 17;
// if (age >=18) {
//     console.log("you can vote");
// }

// if (age <18) {
//     console.log("you cannot  vote");
// }

// let mode ="light"
// let color;

// if (mode==="dark"){
//     color ="black"
// }

// if (mode==="light"){
//     color ="white"
// }
// console.log(color);

// let age =15;

// if(age>=18){
//     console.log("vote");
// }else{
//     console.log("not vote");
// }

// //odd and even
 
// let num =1127236;
// if (num%2===0){
//     console.log(num, 'is even');
// }else {
//     console.log(num, 'is odd');
// }

// let age= 10;
// result = age >= 18 ? "adult" : "not adult" ;//simple compact if-else
// console.log(result);
// let num = prompt ("enter the number :");
// if (num%3 === 0 ){
//     console.log(num,'is a multiple of 5')
// }else{
//     console.log(num,'is not a multiple of  5' )
//}

let score = prompt ("enter your score (0-100):");
let grade;

if (score>= 90 && score<=100){
    grade="A"
}

if (score>= 70 && score<=89){
    grade="B"
}
if (score>= 60 && score<=69){
    grade="C"
}
if (score>= 50 && score<=59){
    grade="D"
}
if (score>= 0 && score<=49){
    grade="F"
}

console.log("according to your score , your grade is; " ,grade );  