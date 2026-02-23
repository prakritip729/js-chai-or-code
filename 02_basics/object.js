 //object 

 //object literals
   

 const mysym = Symbol("key1")

 const jssss = {
    name:"prakriti",
    "full name" : "prakriti",            //for printing ful name dot method can not be used
    [mysym] : "mykey1",                  //this one also
    age : 20,
    location : "jaipur",
    email: "prakriti@gmail.com",
    isloggedIn:false,
    lastLogininDays:["monday","thursday"]
 }

 console.log(jssss.email)
 console.log(jssss["email"])     
 console.log(jssss["full name"])     
 console.log(jssss[mysym])

 //all type of data can not be printed using dot hence
 //  the square bracket type is used


 //you can change the values in object like this
 jssss.email = "prakriti@222gmail.com"
 
//Object.freeze(jssss)
jssss.email = " prakriti@chatgpt.com"
// here we can freeze any value so that there values can not be changed
console.log(jssss);
 


jssss.greeting = function(){
   console.log("Hello js user");
}

jssss.greetingtwo = function(){
   console.log(`hello js user,${this.name}`);      //string enterpolation
} //this is used to referrence the same object

console.log(jssss.greeting);     //here only reference back of the function is returned not the function
console.log(jssss.greeting());   
console.log(jssss.greetingtwo());   //give output with the name additional with it