// lets look at some examples

function promiseTimeout(ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}

