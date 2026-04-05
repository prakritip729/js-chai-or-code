//  object constructor

//const tinderUser = new Object()
const tinderUser = {}

    tinderUser.id = "123absddf"
    tinderUser.name = "sammyy"
    tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser = 
{
    email : "someZ2@gmail.com",
    fullname : { 
        userfullname : 
        {
            firstname :"Prakriti",
            lastname : "pandey"
                                                                                                                                                           
        }
    }    
}
console.log(regularUser.fullname.userfullname.lastname);

//for joing two objects
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
//const obj3 ={obj1 , obj2}            //two objects are joined but written only in separated forms 
//const obj3 = Object.assign( {},obj1 , obj2)    //assign property : properly joins the objects 

//spread operator 
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"snbcdhcbrucgmail.com",
    },
    {
        id:1,
        email:"snbcdhcbrucgmail.com",
    },
    {
        id:1,
        email:"snbcdhcbrucgmail.com",
    }
]
users[1].email
//we can denate so many nested loops within an object 


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));        //used to print key value pairs and they are 
// displayed in the form array each item is displayed like array


//this is written to write the keys and values separately and 
// they are dispayed in the form of array 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
//used to check whether the value or key pair is present or not 


//destructuring
const cource = {
    courcename : "js in hindi ",
    price:"9999",
    courceInstructor:"prakriti",
}
console.log(cource.courcename)          // this is ok but you have to type for different values seversl times

const {courceInstructor:instructor} = cource        //you can give name according to you
console.log(instructor);                
console.log(cource)


// APIs
// {
//     "name" : "prakriti",
//     "coucename" : "js in hindi",    //are the ways to write json it is like object but here no name is given to object hence it is considered as json  
//     "price" : "free",
// }
// [
//     {},
//     {},
//     {},
// ]
