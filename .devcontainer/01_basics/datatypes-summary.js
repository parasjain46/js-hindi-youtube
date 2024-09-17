//primitive

//7 types:String,Number,Boolean,null,undefined,symbol,BigInt
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

//symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//false

//BigInt
//const bigNumber=3456n
//console.log(typeof bigNumber);//bigint
//Reference (Non primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myobj={
    name:"hitesh",
    age:22,
}
const myFunction =function(){
console.log("Helloworld");
}
console.log(typeof outsideTemp)//object
console.log(typeof scoreValue)
console.log(typeof myFunction)
console.log(typeof heros);
console.log(typeof myobj);