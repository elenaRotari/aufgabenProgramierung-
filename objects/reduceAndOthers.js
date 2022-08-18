console.log("---aufgabe 1 ---");
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const sumOrderrsAmount = orders.reduce((acc, el) => acc + el.amount, 0);
console.log(sumOrderrsAmount);

console.log("---aufgabe 2 ---");
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const incrementArr = (arr) => {
  return arr.map((el) => el + 1);
};
console.log(incrementArr(arrayOfNumbers));

console.log("---aufgabe 3 ---");
const onlyEvens = [1, 2, 3, 11, 12, 13];
const filtersEvens = (arr) => {
  return arr.filter((x) => x % 2 === 0);
};
console.log(filtersEvens(onlyEvens));

console.log("---aufgabe 4 ---");
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const searchfriends = (arr) => {
  return arr
    .filter((name) => name.includes("ka"))
    .map((name) => name[0].toUpperCase() + name.slice(1));
};
console.log(searchfriends(friends));

console.log("---aufgabe 5 ---");
const arrOfNum = [1, 2, 3, 4, 5];
const sumofNumbersArr = (arr) => {
  return arr.reduce((acc, el) => acc + el, 0);
};
console.log(sumofNumbersArr(arrOfNum));

console.log("---aufgabe 6 ---");

const numbersToSQRT = [16, 25, 64, 1024];
const quadtraWurzel = (arr) => arr.map((num) => Math.sqrt(num));

console.log(quadtraWurzel(numbersToSQRT));
