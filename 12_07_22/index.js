function getRandomNumbers(amount) {
  const numbers = Array();

  for (let i = 0; i < amount; i++) {
    numbers.push(parseInt(Math.random() * 100));
  }

  return numbers;
}
const numberRandom = getRandomNumbers(50);
let counter = 0;
let grosser50 = [];
let kleiner50 = [];
console.log(numberRandom);
for (let i = 0; i < numberRandom.length; i++) {
  if (numberRandom[i] < 50) {
    counter = counter + 1;
    kleiner50.push(numberRandom[i]);
  } else {
    grosser50.push(numberRandom[i]);
  }
}
// console.log(kleiner50);
// console.log(Array.isArray(kleiner50));
console.log(`Es gibt ${counter} zahlen unter 50`);
console.log("Zahlen unter 50:", kleiner50);
console.log("Zahlen großere  / gleich 50:", grosser50);
