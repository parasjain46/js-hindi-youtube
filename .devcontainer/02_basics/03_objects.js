//singleton
//object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"PARAS",
    "full name":"Paras Jain",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"paras@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="parasjain@gmail.com"
// Object.freeze(JsUser);
// JsUser.email="parasjain@abcdgmail.com"
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());