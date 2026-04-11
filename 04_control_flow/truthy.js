 const userEmail = []

 if(userEmail){
    console.log("got user Email");
 }
 else{
     console.log("don't have user email");
 }

 //falsy values

 //false,0,-0,BigInt 0n,"", null , undefined,NaN

 //thuthy values

 //"0",'false," ",[],{}, function(){}  

 //how we check that array is empty 
 if(userEmail.length === 0){
    console.log("Array is Empty");
 }

 //how we check that object is empty
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
//Object.keys(emptyObj) ---this will return us an array and .length === 0 will make that empty



//nullish coalescing operator (??) ; null undefined
  let val1;
  //val1 = 5 ?? 10
  //val1 = null ?? 10
  //val1 = undefined ?? 15
  //val1 = null ?? 10 ?? 20
    val1 = undefined ?? null


  console.log(val1);

  // ??  is used to reduce problems when we recieve more than one value or get null or undefined


  //terniary operator
  const iceteaprice = 100
  iceteaprice <= 80 ? console.log("less than 80"): console.log("more than 80")