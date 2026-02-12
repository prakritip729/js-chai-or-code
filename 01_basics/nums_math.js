const score = 300
console.log(score);            
 //number to print

const balance = new Number(100)
console.log(balance);           
//method 2 for taking input and output for number

console.log(balance.toString().length);
//first convert number to string then find ut the length if the string

console.log(balance.toFixed(1));  
 //it will give the value after decimal according to the input


const otherNumber = 123.3882362     
console.log(otherNumber.toPrecision(4));
//it will precise the value to the given no. of terms 


const hundreads = 10000000
console.log(hundreads.toLocaleString('en-IN'));
//put commas to make it redable and
//  en-IND for the indian ruppes reading style


// ****************. MATHS  **********************

console.log(Math);
console.log(Math.abs(-4));  //convert neg value to positive 
console.log(Math.round(4.6));  //taking round off the nu
console.log(Math.ceil(4.2));   //higher or upper value after rounding off
console.log(Math.floor(4.9));   //taking floor value lower value
console.log(Math.min(4 , 3 , 6, 8));
console.log(Math.max(2 , 4 ,5 ,7));


console.log(Math.random());//provides a random value
console.log((Math.random()*10) + 1 );
//we can move decimal one place forward and here 
// +1 is because of some numbers like 0.01 then it will return
//  0 only after moving point 1 place forward 

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//formula for calculating the random value 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
