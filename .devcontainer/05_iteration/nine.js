const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        prise:2999
    },
    {
        itemName:"mobile",
        prise:999
    },
    {
        itemName:"py course",
        prise:1999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay);