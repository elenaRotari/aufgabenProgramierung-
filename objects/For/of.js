console.log("____Ex:1____");
const person = {
  firstName: "Misha",
  lastName: "Rotary",
  job: "schüler ",
  age: 9,
  city: "Berlin",
};

for (const item in person) {
  console.log(item, person[item]);
}

console.log("____Ex:2____");
const getObjectValues = (obj) => {
  return Object.values(obj);
};
console.log(
  getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  })
);
console.log("____Ex: 3____");
let person1 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  getInfo() {
    return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city} `;
  },
};

console.log(person1.getInfo());

console.log("____Bonus 1____");

const objToArr = (arr) => {
  return Object.entries(arr);
};
console.log(
  objToArr({
    A: 1,
    B: 2,
    C: 3,
  })
);
console.log(
  objToArr({
    cats: 1,
    dogs: 2,
    turtles: 4,
  })
);
console.log("____Bonus 2____");

const student = (obj) => {
  return Object.keys(obj);
};
console.log(
  student({
    name: "Mike",
    class: "4A",
    course: "English",
  })
);
console.log("____Bonus 3____");

const bothObj = () => {
  let first = { firstName: "John" };
  let last = { lastName: "Smith" };
  let mergedObj = { ...first, ...last };
  return mergedObj;
};

console.log(bothObj());
/* die werden überschrieben mit dem letzten const person= {name: "example"} person.name= example2 → const person = { name: example2}
 */
console.log("____Bonus3a ____");
const mergedOBjects = (x, y) => {
  return { ...x, ...y };
};
console.log(mergedOBjects({ vorname: "Ella" }, { nachname: "rotary" }));
console.log("____Bonus 4____");

const swapKeysOnObj = (obj) => {
  let swap = {};
  for (let key in obj) {
    swap[obj[key]] = key;
  }
  return swap;
};
console.log(
  swapKeysOnObj({
    name: "John",
    job: "teacher",
  })
);

console.log("____Bonus 5____");

const objectToArr = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};
console.log(objectToArr({ a: 1, b: 2, c: 3 }));
