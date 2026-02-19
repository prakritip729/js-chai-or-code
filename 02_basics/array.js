 const myArr = [0,1,2,3,4,5]                //initialization 1
//  const myHeroes = ["saktiman","doremon"]    //initialization 2

//  const myArr2 = new Array(1,2,3,4)          //initializing 3
//  console.log(myArr2[0]);                    //printing element by index

// //  myArr.push(6)                              //add element in the array
// //  myArr.push(7)                              
// //  myArr.pop ()                               //remove the last element from the array
// //  myArr.unshift(9)                           //add the element as the first element in the array
//   myArr.shift()                                //removes the first element from the array     
//  console.log(myArr);
 
//  console.log(myArr.includes(2));                //boolean type tell whether element is present or not 
//  console.log(myArr.indexOf(4));                 //gives the index of the element present 
//  console.log(myArr.indexOf(9));                 //given -1 when the element is not present in the array

//  const newArr = myArr.join();                   //add all the element to the string
//  console.log(myArr);
//  console.log(newArr);                           //GIVES the data same as the joined array
//  console.log(typeof newArr);                   //datatype is changed to string by using join method 
  
   //slice and splice  
   console.log("AB" , myArr)

   const myn1 = myArr.slice(1,3)
   console.log(myn1);
   console.log("A" , myArr);
   
   const myn2 = myArr.splice(1,3)
   console.log(myn2);
   console.log("B" , myArr);

   //main difference bbetween slice ans splice is , 
   // slice doesnoe include the range element but splice 
   // includes the range elements whereas it make changes in the original array as follows 
   //it does not take the spliced elements inthe array 
   

   //this is the output of the slice ans splice of array [0,1,2,3,4,5]
//    AB [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// B [ 0, 4, 5 ]