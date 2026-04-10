// //if
// const isUserloggedIn = true
// //const temperature = 41
// if(temperature == 40){
//     console.log("less than 50");
// }
// else{
//    console.log("greater than 50");
// }
// console.log("executed");
// //< , > , <= , >= , == , != , === , !==


// const balance = 1000
// //we can write  condition like this also 
// //if(balance>500) console.log("test"), console.log("test2");
// if(balance < 500) {
//     console.log("less than 500");
// }
// else if (balance <750){
//     console.log("greater than 750");
// }
// else if(balance <900){
//     console.log("grter than 900");
// }
// else {
//     console.log("less than 1200");
// }

const loggedinFromEmail = true
const loggedinFromGoogle = false
if(loggedinFromGoogle && loggedinFromEmail){
    console.log("alloed login") 
}

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("user")
}