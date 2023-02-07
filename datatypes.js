//

const people = ["Brian", "Apple", "Jack"];
const one =1;
const str = "Hello World";
const b = true;
const person ={
    firstName: "brian",
    lastName: "br"
}

function sayhello(person){
    console.log("hello " + person.firstName);
}

console.log("******type of******");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str)
console.log(typeof b)
console.log(typeof person)
console.log(typeof sayhello)

// using instanceof to test type of variable
console.log("***instanceof***")
console.log(people instanceof Array)
console.log(one instanceof Array);
console.log(str instanceof Array)
console.log(b instanceof Array)
console.log(person instanceof Array)
console.log( sayhello instanceof Array)