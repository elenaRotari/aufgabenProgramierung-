let isDogBetter = true;
let isCatBetter = false;

console.log(isDogBetter && isCatBetter); // false because one of them is false
console.log(isDogBetter || isCatBetter); // true because one of them is true
console.log(!(isDogBetter && isCatBetter)); // true  because the result is true and not true is already true

let atoms = 6;
let sandGrains = 15;
let startsInSky = 2345;

let aufgabe4A = atoms > startsInSky && atoms > sandGrains;
console.log({ aufgabe4A }); // false because  false && false  is equal false
let aufgabe4B = atoms !== sandGrains;
console.log({ aufgabe4B }); // true => they are not equal
let aufgabe4C = startsInSky < sandGrains || startsInSky > atoms;
console.log({ aufgabe4C }); //true =>  false or true equal true
let aufgabe4D = atoms === startsInSky || atoms !== sandGrains;
console.log({ aufgabe4D }); // true => false or true equal true
let aufgabe4E = atoms >= 10 && sandGrains <= 10;
console.log({ aufgabe4E }); // false => false and false equal false
let aufgabe4F = atoms * startsInSky < 100 || atoms * sandGrains > 100;
console.log({ aufgabe4F }); //false => false or false equal false

let count = 7;
while (count < 10) {
  console.log("elena");
  count = count + 1;
}
