// lets look at some examples

function promiseTimeout(ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('DONE after 2s or 2000ms!!')// this will be printed 
                                //when all is well
    }).catch(()=>{
            console.log('ERROR!!')//in case it went otherwise
    })