//objects are representations of real world objects
// likewise in js, objects have associated 
//properties and methods 

const book = {
    title:"2023",// this is an object literal, cause 
                 //we are creating and defining at the same time 
    author:"Abcd Efg",//title, author, and isAvailable are the properties
    isAvailable: true,


checkIn: function()  {// and checkIn and checkOut are the methods
    this.isAvailable =true;
},

checkOut: function(){
    this.isAvailable=false;
}
};

console.log(typeof book);


//we can as well create objects using constructors

const newbook = new Object();
newbook.title ="2023";
newbook.author = "abc def";
newbook.isAvailable =true;

newbook.checkIn = function(){
    this.isAvailable = true;

}

newbook.chekOut =function(){
    this.isAvailable = false;
}

console.log(typeof book);