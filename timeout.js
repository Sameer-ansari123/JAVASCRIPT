let DATA = "secret information";

class User{
    constructor (name,email) {
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =", DATA);
    }
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "something new vaiue";

    }
}

let Student1 = new User("Sameer","mdsameer@gmail.com");
let Student2 = new User("Ansari","123@gmail.com");

let teacher1 = new User("Headmaster","dean@college.com");

let admin1 = new Admin("admin","admin@gmail.com"); 


let a = 5;
 b = 10;
console.log(a+b);
console.log(a+b);
try{
console.log(a+c); //error
}catch(err){
    console.log(err)
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);

const sameer = () => {
    console.log("sameer");
};
setTimeout ( sameer, 1000);

const object1 ={}
object1.property1 = 2;
console.log(object1.hasOwnProperty("property1"));

console.log(object1.hasOwnProperty("toString"));

console.log(object1.hasOwnProperty("hasOwnProperty"));

function getData (dataId){
    return new Promise ((resolve , reject) => {
        setTimeout(() =>{
            console.log("data" , dataId);
            resolve("success");
        }, 2000);

    });
}

(async function (){
    console.log("getting Data1....");
    await getData(1);
    console.log("getting Data2....");
    await getData(2);
    console.log("getting Data3....");
    await getData(3);
    console.log("getting Data4....");
    await getData(4);
    console.log("getting Data5....");
    await getData(5);
})();


