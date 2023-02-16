//we need to know two methods here
//1. json.stingify and 2. json.parse
//btw, json= js object notation


//objects to strings

// Object format

const book= {
    title: "1990",
    author: "Abc Def",
    isAvailable: false
};

//converted to JSON
const bookJSON =JSON.stringify(book);
console.log(bookJSON);

//strings to objects(restoring the original objects)

//json text

var jsonObj = '{"title ":"going","author":"Def Ghi","isAvailable","isAvailable":true}';

//to object
var book1 =JSON.parse(jsonObj);
console.log(book.title);