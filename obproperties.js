//properties have immutable names
//and immutable values

//we access using ;
//1. dot notation(<object>.name)
//2. bracket notation(<object>["name"])


const newbook = new Object();
newbook.title ="2023";
newbook.author = "abc def";
newbook.isAvailable =true;

newbook.checkIn = function(){
    this.isAvailable = true;
    return this;

};

newbook.chekOut =function(){
    this.isAvailable = false;//note the use of the 'this' key word
    return this;
};
console.log(newbook.checkIn());