// //   //scope

// //   //var c = 300         //this is not printing due to var keyword inside the scope

// //   let a = 200
// //   if(true){
// //     let a = 10
// //     const b = 20
// //     var c = 30
// //     console.log("INNER:",a)
// //   }
// //   console.log(a);
// //   //console.log(b);
// //   //console.log(c);

//   function one(){
//     const username = "youtube"
     
//   function two(){
//     const website = "us"
//     console.log(username);
//     console.log(website);
//   }
 
//  two()

// }
 
// one()


// if(true){
//   const username = "prakriti"
//   if(username === "prakriti"){
//     const website = "youtube"
//     console.log(username + website); 
//   }
// }

  //*******************intresting***************************



  console.log(addone(5))
  function addone(num){
    return num+1
  }
   
  const addtwo = function (num){
    return num+2
  }
    console.log(addtwo(5)) 