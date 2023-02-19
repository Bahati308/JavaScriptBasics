// this is built upon promisedemo2
// we have added a 3rd .then to print out a value 

function promiseTimeout(ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve,ms);// this reject thing will return error,
                            // and the resolve thing will return the 
                            // intended messages
    });
}

promiseTimeout(2000)

    .then(() => {

        console.log('this is a success because the parameter was set to resolve')

        console.log('success, DONE after 1s or 1000ms!!')// this will be printed 
                                //when all is well
          return promiseTimeout(1000);
    })
    .then(()=>{
    console.log('success, DONE TOO, BUT after 2s 0r 2000ms');

    return Promise.resolve(67);
    })
    .then((result)=>{
            console.log(result);
    console.log('hense we use promises to manage a long running asychronus operations')
    })
    
    .catch(()=>{
        console.log('this is an error since the parameter is set to reject')
            console.log('ERROR !!')//in case it went otherwise
    })