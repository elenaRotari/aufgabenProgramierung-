console.log("----AUFGABE1----");
let euroCountries = ["Deutschland", "Poland", "France", "Spain"];
const asiaCountries = ["China", "Japan", "Thailand", "India"];
const mergedCountries = euroCountries.concat(asiaCountries);
euroCountries = [...euroCountries, ...asiaCountries];
console.log(mergedCountries);

console.log("----AUFGABE2----");
const euroCountries1 = ["Deutschland", "Poland", "France", "Spain"];
const asiaCountries1 = ["China", "Japan", "Thailand", "India"];
const mergedCountries1 = [...euroCountries, ...asiaCountries];
console.log(mergedCountries);

console.log("----AUFGABE3----");
const maxNumberArr = [2, 34, 56, 2, 120];

const findMaxNum1 = (num) => {
  return Math.max(...num);
};
console.log(findMaxNum1(maxNumberArr));

console.log("----AUFGABE4----");
const findMinNum1 = (num) => {
  return Math.min(...num);
};
console.log(findMinNum1(maxNumberArr));

console.log("----AUFGABE5----");
const person = { name: "John" };
const job = { role: "Teacher" };
const person2 = { ...person };
const employee = { ...person, ...job };
console.log(person2 == person);
console.log(employee);
employee.name = "Kewin";
employee.role = "Singer";
console.log(employee);
