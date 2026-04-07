// const user = {
//     username : "prakriti",
//     price : 3000,

//     welcomeMessage : function() {
//         console.log(`${this.username} , welcome to website`); 
//         //this is used to refer to the current context
//         console.log(this);
//     }
// }
//  user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);  
// // here if the current context is empty it will print empty perenthses 
// //but in browser it will give windows as result 


// // ways how could we defines functions through the arrow functions 
//// method -1

// function chai(){
//     let username = "prakriti"
//     console.log(this.username);  //undefined
// }
// chai()

// //method-2
// const chai = () =>{
//     let username = " prakriti"
//     console.log(this.username);
// }
// chai()

//basic arrow function -- 1
//    const addTwo = (num1 , num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))  

//arrow function method -2
//implesit return is here which means return is not required ---
// ye man ke chlta hai hume return hi krna hai return likhne ki jarurat nhi hai 
//const addTwo = (num1 , num2) => num1+num2


//if we write num1+num2 in () it does not need to write return 
//but if we write { there then return is required
// const addTwo = (num1 , num2) => (num1+num2)
// console.log(addTwo(3,4))

const addTwo = (num1 , num2) => ({username:"prakriti"})
console.log(addTwo(4,5))