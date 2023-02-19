// while promises are cleaner, they are not perfect
// this is where async/wait comes handy

function promiseTimeout(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, ms);
    });
}

async function run() {

    // logic
    console.log('start');
    await promiseTimeout(2000)// alawys use the await, never forget
    console.log('stop');
    console.log('the stop message had to wait for 2s');
}

            run();// without this, the program will not execute.