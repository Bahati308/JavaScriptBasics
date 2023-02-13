// this is the same as the and.js 
// but using the switch statement instead

const stat =200;

switch(stat){
    case 200:
    console.log ('OK!');
    break;

    case 400://or
    case 500://or
        console.log('Error !');
        break;
    default: //else
    console.log('unknown status');
    break;

}
