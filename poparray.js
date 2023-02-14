// populating arrays

let arr1 = ["hello", 'world', 8];

console.log (arr1[0] +" "+ arr1[ 1] );
console.log ('the number is: ' +arr1[2]);

// above is one method of populating the array
// below is another method 
//we are adding data after creating the array

let arryLength = 2;
let  arr2 = Array(arryLength);
arr2[0] = 'value at index 0';

console.log(arr2[0]);
console.log(arr2[1]);// note that this is empty
                    // it is not defined yet
