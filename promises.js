//tnis is about asychronous programming

function callback (){
    console.log('Timeout completed');

}

setTimeout(callback, 3000); // wait 3 seconds
