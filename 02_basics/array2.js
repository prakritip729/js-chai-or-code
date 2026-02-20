const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)


//this is saving data in the form of array rather then merging 
// it is creating the second array whole as a element


console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);                   //flash

// Because:
// index 3 → second array
// index 1 → "flash"


const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);


//this is concat used to join two arrays in one new array 


const all_new_heroes = [...marvel_heroes,...dc_heroes]

console.log(all_new_heroes);

//this is spread used to join two or more arrays by spreading 
// the elements of the arrays using dot in the syntax and merge them like concat 

console.log(Array.isArray("prakriti"))      //tell whether this is array or not 
console.log(Array.from("prakriti"))         //convert it into array


console.log(Array.from({name : "prakriti"}))           
 //interesting case beacuse here it will give empty 
// array beacuse it does not know that what value should it give 
// whether key or value or both 
 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

//this is used to give new array by joing multiple values or arrays 