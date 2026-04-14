// //for in loop
// // this for in loop works on objects
// const myObject ={
// js : 'javascript',
// cpp: 'C++',
// rb : "ruby",
// swift : "swift by apple"
// }

// for (const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);

// }


//yes this workds on array also
const programming =["js","cpp","swift","java"]
for(const key in programming){
    console.log(programming[key]);

}
//for map this is not applicable .. maps are not iteratable

const map = new Map()
map.set('IN',"India")
map.set('USA',"UNited States of America")
map.set('Fr',"France")
map.set('IN',"India") 

for(const key in map){
    console.log(key);  //this doesnot give any output
}