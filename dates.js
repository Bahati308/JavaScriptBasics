// this is about the dates and times
//we use the date object


// get right now

const now = new Date(); 

console.log(now);// this prints out the default time

//however, we can customize the time we want.

const win9launch = new Date(1997, 2, 10);// we specified the date we want 

console.log(win9launch);

//we can set have more customizations too

const demoDate = new Date();

demoDate.setMonth(0);
console.log(demoDate);

// we can get the dates in the following formats too

console.log(`Day of week : ${demoDate.getDay()}`)
console.log(`Date : ${demoDate.getDate()}`)


