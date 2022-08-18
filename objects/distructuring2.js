console.log("---Aufgabe1---");
const car = {
  speed: 250,
  brand: "BMW",
  model: "M4",
  price: 79999,
  electric: false,
};
const { speed, brand, model, price, electric } = car;
console.log(speed, brand, model, price, electric);

console.log("---Aufgabe 1.1.2---");
const person = {
  name: "Tom",
  email: "tom@gmx.de",
  age: 23,
};

const { name: firstName, lastName = "blabla" } = person;

console.log(firstName, lastName);
console.log("---Aufgabe 1.2---");

const names = ["Mark", "Lisa", "Dalia", "Curtis", "Tim", "Ben", "Olaf"];
const [ersteEl, zweiteEl] = names;
console.log(ersteEl, zweiteEl);
const [, , ...rest] = names;

console.log(rest);
