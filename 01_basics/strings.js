const name = "prakriti"
const repocount = 33


// 1 . printing string

//console.log( name + repocount + "Value" );

//2 . printing string method 2

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


// 3. thord methos for printing string

const gameName = new String('prakriti-hc-com')

console.log(gameName[0]);      //for printing index for any letter
console.log(gameName.__proto__); 

console.log(gameName.length); //length of string
console.log(gameName.toUpperCase());//convertinf to upper case
console.log(gameName.charAt(3));//at particular index which letter is 
console.log(gameName.indexOf('t'));//tell the index of particular letter

const newString = gameName.substring(0,4);
console.log(newString);                        //printing a part of the string

const anotherString = gameName.slice(-8,4);
console.log(anotherString);                     //slicing is used becuse it allows neg values also

const newStringOne = "     prakriti    "
console.log(newStringOne);                  //used for removing extra space before and after the string
console.log(newStringOne.trim());

const url = "https://prakriti.com/nature%34pandey"
console.log(url.replace('%35','-'))       // delete the specific letter or operator or number provided 

console.log(url.includes('suundar'))          //checking if the asked string is present in the string or not -true or false     
console.log(gameName.split('-'));             //splitting the characters 
