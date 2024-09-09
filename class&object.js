const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const sameerAnsari ={
    salary:50000
};

const Number1 = {
    salary:45000
};

const Number2 ={
    salary:40000
};

const Number3 ={
    salary:49000
};

const Number4 ={
    salary:42000
};


sameerAnsari.__proto__=employee
Number1.__proto__=employee
Number2.__proto__=employee
Number3.__proto__=employee 
Number4.__proto__=employee


class toyotaCar {
    constructor(){
        console.log("creating new object car ");
    }
    start(){
        console.log ("start");
    }
    stop(){
        console.log ("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new toyotaCar("fortuner");
let lexus = new toyotaCar ("lexus"); 

class parent{
    hello(){
        console.log("sameer ansari");
    }

} 
   class child extends parent {}

   let obj = new child ();



   class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");

    }
   }

   class engineer extends person{
    work(){
        console.log("solve the prolems , and build somethings");

    }
   }
console.log("English");
   let sameer =  new engineer();

