console.log("----Aufgabe 1 ---");
/*Schreiben Sie eine Funktion namens `doubleValues`, die ein Array akzeptiert und ein neues Array zurückgibt, in dem alle Werte verdoppelt sind.

Beispiele:
```
doubleWerte([1,2,3]) // [2,4,6]
doubleWerte([5,1,2,3,10]) // [10,2,4,6,20]
```*/
const doubleWerte = (arr) => {
  return arr.map((element) => element * 2);
};

console.log(doubleWerte([1, 2, 3]));
console.log(doubleWerte([5, 1, 2, 3, 10]));
console.log("----Aufgabe 2 ---");
/***2.** Schreiben Sie eine Funktion namens `onlyEvenValues`, die ein Array annimmt und ein neues Array zurückgibt, das nur die geraden Werte des Arrays enthält, das der Funktion übergeben wurde.

Beispiele:
```
nurGeradeWerte([1,2,3]) // [2]
nurGeradeWerte([5,1,2,3,10]) // [2,10]*/
const arr = [1, 2, 3];
const arr1 = [5, 1, 2, 3, 10];

// const onlyEvenValues = arr1.forEach((element) => {
//   if (element % 2 === 0) console.log(element);
// });

const onlyEvenValues1 = arr.filter((x) => x % 2 === 0);
console.log(onlyEvenValues1);
console.log("----Aufgabe 3---");
/***3.** Schreiben Sie eine Funktion namens `showFirstAndLast`, die ein Array von Zeichenketten akzeptiert und ein neues Array mit nur dem ersten und letzten Zeichen jeder Zeichenkette zurückgibt

Beispiele:

```js
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']*/
const arr2 = ["colt", "matt", "tim", "udemy"];
const showFirstAndLast = arr2.map((ell) => ell[0] + ell[ell.length - 1]);
console.log(showFirstAndLast);

const showFirstAndLast1 = (arr) => {
  return arr.map((ell) => ell[0] + ell[ell.length - 1]);
};
console.log(showFirstAndLast1(["hi", "goodbye", "smile"]));
console.log("----Aufgabe 4---");
/***4.** Schreiben Sie eine Funktion namens "vowelCount", die eine Zeichenkette annimmt und ein Objekt zurückgibt, dessen Schlüssel die Vokale und dessen Werte die Anzahl der Vorkommen des Vokals in der Zeichenkette sind. Diese Funktion sollte Groß- und Kleinschreibung nicht berücksichtigen, so dass sowohl Klein- als auch Großbuchstaben gezählt werden.

Beispiele:

```js
vowelCount('Elie') // {e:2, i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
```*/

const vowelCount = (str) => {
  const vowel = "aeoui";
  const result = {};
  str
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (vowel.includes(el) && result[el] === undefined) result[el] = 0;
      if (vowel.includes(el)) result[el] += 1;
    });
  return result;
};

console.log(vowelCount("I Am awesome and so are you"));

console.log("----Aufgabe 5---");
/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/
console.log("------mathematische methode--------");
const addNumbers = (num) => {
  return (num * (num + 1)) / 2;
};
console.log(addNumbers(4));
console.log(addNumbers(13));
console.log(addNumbers(600));

console.log("------loop methode --------");

const numberSum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(numberSum(4));
console.log(numberSum(13));
console.log(numberSum(600));
const addUp1 = (num) => {
  const numbers = [];
  for (let i = 1; i <= num; i++) {
    numbers.push(i);
  }
  return numbers.reduce((acc, el) => acc + el);
};
console.log("----reduce metode----");
console.log(addUp1(4));
console.log(addUp1(13));
console.log(addUp1(600));
