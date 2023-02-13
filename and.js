const stat = 500;// this is now with 500 instead of 200

    if (stat === 200){
        console.log('OK!');
    }
     else if (stat === 400 || stat ===500){
                console.log('Error !');
            }
        else {
            console.log('unknown status');
        }