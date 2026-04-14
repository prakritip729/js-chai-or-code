//for each loop
//here function is callback so do not writ name of the function
 const coding =["js", "javascript","java","phython"]
// coding.forEach(function (val){
//     console.log(val);
// })
//       //method 2
//  //can print by arrow function
//  coding.forEach((item) => {
//     console.log(item);
//  })

// //method 3\
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

//arrow function have more values also othera than key or item

// coding.forEach((item,index,arr) => {
//     console.log(item , index , arr)
// })

//["","",""]---giving in this format 
const mycoding = [
    {
        languageName : "javascript",
        languageFileName :"js"
    },
    {
        languageName : "java",
        languageFileName :"java"
    },
    {
        languageName : "c++",
        languageFileName :"cpp"
    },

]
mycoding.forEach((item) => {
    console.log(item.languageName)
})