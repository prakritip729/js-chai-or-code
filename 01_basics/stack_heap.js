//stack - is used in primitive type of data
let myset = "setissuper"

let anotherset = "chaiandcode"
anotherset = "myutubename"

console.log(myset);
console.log(anotherset); // changes the value of anotherset 

 //stack the values are directly printed but are copies and the
 //  updation is performed on the copies not the original values



//heap- is used for non primitive datatypes
let oneuser = {
    email: "nature@gmial.com",
    upi : "user3454@e"
}
let usertwo = oneuser
usertwo.email ="nature454545544@google.com"


console.log(oneuser.email)
console.log(usertwo.email)

//in heap the value is being referred by the stack 