//Immediately Invoked function Expression(IIFE)

(function chai(){
    //named IIFE
console.log(`DB connected`);
})();
(  (name) =>  {
    console.log(`DB connected two ${name}`);

})('hitesh')

