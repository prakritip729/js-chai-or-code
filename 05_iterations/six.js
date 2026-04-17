// const coding = ["js","java","ruby","python"]
// const values = coding.forEach((item)=> {
//     console.log(item);
//     return item
// })
// console.log(values);
// //this will not going to print value after you assign here const 
// //this is not performed by for each. loop --it will ot retunr the value

//can use filter method to perform printing
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> num > 4 )
    console.log(newNums);

     