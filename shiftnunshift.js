//this is about shift and unshift

let arr1 = ["hello", 1, true];

console.log(arr1);// original content

console.log (arr1.unshift("new value"));//unshift adds 
// a value at the beginning of the array and returns the 
// new array length

console.log(arr1);// after a new value is added

console.log(arr1.shift()); //removes and prints the 
// previously added value

console.log(arr1);