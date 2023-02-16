//we need to know two methods here
//1. json.stingify and 2. json.parse
//btw, json= js object notation

// Object format

const book= {
    title: "1990",
    author: "Abc Def",
    isAvailable: false
};

//converted to JSON
const bookJSON =JSON.stringify(book);
console.log(bookJSON);