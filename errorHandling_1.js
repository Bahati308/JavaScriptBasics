//our first exan]mple in error handling
//try catch: this is specific with the code eg. criticalcode
// and then catch will analyse that 
try {
    criticalcode();
} 

catch (ex) {
    console.log('Got an error');

    logError(ex);
}

// finally

finally{
    console.log('code that always will run');
}