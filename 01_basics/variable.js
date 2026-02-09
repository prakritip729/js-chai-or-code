const accountID = 12345234                  //there is only one way to declare constant is const keyword//
let accountEmail = "aertyu@gmail.com"      //there are two ways to declare variable let and var//
var accountPassword = "12345"
accountCity = "jaipur"                      //javascript allow to declare varibale without writting let or var//
let accountState ;                          //undefined     


//accountID = 98876543// not allowed

accountEmail = "hchdejde@gmail.com"
accountPassword = "12343434"
accountCity = "kanpur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/  

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])