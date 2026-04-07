//Immediatelty Invoked Function Expression (IIFE)

//IIFEis used because sometimes global scope
//  pollution creates probelm in quick implementation 
// so we use IIFE to reduce that pollution

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); // here semicolon is used to end the iife here sometimes it does not know to stop the execution
//()() --- this is the syntax here we wrap function into parantheses and then run it by applyling another parantheses

((name) => {
    console.log(`DB CONNECTED TO ${name}`)
})("prakriti")

  