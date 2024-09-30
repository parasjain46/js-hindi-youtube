function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("s");
}
//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// function addTwoNumbers(number1,number2){
//     let result=number1+number2;
//     return result;
//    // return number1+number2;
// }

// addTwoNumbers(1,2);
// const result=addTwoNumbers(1,2);
// console.log(result);

function loginUserMessage(username){
    if(!username){
    //if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"paras",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondvalue(getarray){
    return getarray[1];
}
console.log(returnSecondvalue(myNewArray));