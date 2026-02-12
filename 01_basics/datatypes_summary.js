 //primitive datatypes

 //7 types of data :- string , number , Boolean , null , undefined , symbol, BigInt

 const score = 100 //number datatype 1
 const scoreValue = 100.3 //number datatypes
 const isLoggedIn= true     //boolean 2
 const outsideTemp = null    //null.  3
 let userEmail;             //undefined.  4
//symbol. 4
 const id = Symbol('123')   //work of symbol is that if you pass same value in two symbols
 //  but still these values are different 
 const anotherId = Symbol('123')    
console.log(id === anotherId);
 
const BigNumber = 2334534456453263463n//bigint. 5

 
 //Reference (non primitive)
 //array , objects , functions

 //1.arrays
 const animals =['monkey','donkey','cat','dog'];

 //2.object
 let myObj = {
    name:"prakriti", 
    age :20,
 }  
//3.function
const myFunction =function(){
    console.log("hello world"); 
}
 console.log(typeof score)
 console.log(typeof scoreValue)
 console.log(typeof isLoggedIn)
 console.log(typeof outsideTemp) //object : null datatype gives object as typeof data
 console.log(typeof userEmail)
 console.log(typeof BigNumber)
 console.log(typeof myFunction) // returns function : object function
 console.log(typeof anotherId)
 console.log(typeof myObj)
 console.log(typeof animals) // for array also it returns object


//link for typeof data for checking the datatypes
 //https://262.ecma-international.org/5.1/#sec-11.4.3