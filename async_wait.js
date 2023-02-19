// while promises are cleaner, they are not perfect
// this is where async/wait comes handy

function promiseTimeout(ms) {
    return new promiseTimeout(()=>{
        setTimeout(resolve, ms);
    });
}

async function run() {

    // logic
    console.log('start');
    await promiseTimeout(2000)
    console.log('stop');
}