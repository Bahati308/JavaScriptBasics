// we are trying to compare the variables
// and the messages too in this case the case-sensitiveness 

const stat = 'error';
// to rectify this we can use the following 
if (stat.toUpperCase() === 'ERROR') {
    console.log ('oops, something went wrong !')
}
    else {
        console.log('looks dope');

    }