// lets look at some examples

function promiseTimeout(ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve,ms);// this reject thing will return error,
                            // and the resolve thing will return the 
                            // intended messages
    });
}

promiseTimeout(2000)

    .then(() => {

        console.log('this is a success because the above parameter was resolve')

        console.log('success, DONE after 1s or 1000ms!!')// this will be printed 
                                //when all is well
          return promiseTimeout(1000);
    })
    .then(()=>{
    console.log('success, DONE TOO, BUT after 2s 0r 2000ms')
    })
    
    
    .catch(()=>{
        console.log('this is an error since the parameter is set to reject')
            console.log('ERROR !!')//in case it went otherwise
    })