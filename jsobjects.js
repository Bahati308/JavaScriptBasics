//objects are representations of real world objects
// likewise in js, objects have associated 
//properties and methods 

const book = {
    title:"2023",
    author:"Abcd Efg",
    isAvailable: true,


checkIn: function()  {
    this.isAvailable =true;
},

checkOut: function(){
    this.isAvailable=false;
}
};

console.log(typeof book);
