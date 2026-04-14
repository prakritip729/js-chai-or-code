//reduce 
const mynums= [1,2,3,4]
// const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// }, 0)
//console.log(mytotal)


//using arrow functuon
const mytotal = mynums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)


const shoppingcart = [
    {
        itemname : " dev cource",
        price : 1000
    },
    {   itemname : " python cource",
        price : 999
    },
    {
        itemname : "mobile cource",
        price : 2000
    },
    {
        itemname : "js cource",
        price : 2300
    },
]
const pricetopay =shoppingcart.reduce((acc,item)=>acc+item.price , 0)
console.log(pricetopay);