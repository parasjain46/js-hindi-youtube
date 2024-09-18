const name="paras"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('paras-hc-gh')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-5,3)
console.log(anotherString);

const newStringOne="  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https:/paras.com/paras%20"
console.log(url.replace('%20','-'));
console.log(url.includes('saras'));
console.log(gameName.split('-'))