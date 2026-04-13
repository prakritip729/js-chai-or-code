// //for of

// //[" ", " ", " "]
// //[{},{},{}]

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "hello world!"
// for(const greet of greetings){
//     console.log(`each char is ${greet}`);
// }

//maps---this holds tha key value pairs ,
//  in object ot does not hold the order but here in mapa it holds tha size as it is 
//it does not repeat value is we enter same value again still it will print once
const map = new Map()
map.set('IN',"India")
map.set('USA',"UNited States of America")
map.set('Fr',"France")
map.set('IN',"India")  // this is not repeated in the output again
//console.log(map)

for (const [key,value] of map){
    console.log(key , ':-' , value);

}

// const myObject = {
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// for(const[key,value]of myObject){
//     console.log(key,':-',value);
// }
// //here this for of function is not working on objects 
// //there are some ather methods to run objects