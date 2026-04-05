// function sayMyName(){
//     console.log("p");
//     console.log("r");
//     console.log("a");
//     console.log("k");
//     console.log("r");
//     console.log("i");
//     console.log("t");
//     console.log("i");
// }
// sayMyName()

// //steps to write function 
// //function keyword and name the function 
// //then parantheses
// //to call the function write name and paranthises to execute the code 

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1+Number2);
// }
// addTwoNumbers(3,4)

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1+ Number2);
// }
// const result = addTwoNumbers(3,5) //we can store the value in varibale 
// console.log("result:",result);      //if we check the value what it returns - it will return undefined

// //method -2
// function addTwoNumbers(Number1,Number2){
//     let result = Number1+Number2
//     return result
// }

//method 3
// const result = addTwoNumbers(2,5)
// console.log("result:" ,result); 
  
////writing this in case the username is not present 
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//      return  `${username} just logged in`
// }
// //console.log(loginUserMessage("prakriti"))
// console.log(loginUserMessage())              ////this will give undefined in the empty string


//used for so many values
// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,20000))


// //method 1
// // //how objects are implemented in the function 
const user ={
    username: "prakriti",
    price:400,
}
  function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  }
//   handleObject(user)

  //method 2 - we can directly pass object it is not compulsary to make it then pass it

  handleObject({
   username:"sasm",
   price :300
  }) 

  //now for passing value of array in the function
  const myNewArray = [200,400,5000,600]

  function returnSecondValue(getArray){
    return getArray[3]
  }
  //console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200,400,500,1000]));
  