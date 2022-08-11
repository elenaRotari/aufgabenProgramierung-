// const student = {
//   firstName: "John",
//   lastName: "Smith",
//   class: 12,
//   new() {
//     return `${this.firstName} ${this.lastName} is a student in class ${this.class} `;
//   },
// };
// console.log(student.new());

// const persons = {
//   vorName: "Misha",
//   nachName: "Sclifos",
//   alt: 9,
//   beruf: "",
//   stadt: "Berlin",
//   getInfo(str) {
//     return `${this.vorName} ${this.nachName} is a ${
//       this.alt
//     } year old und  hat ${this.beruf > 0 ? this.beruf : "kein beruf"}`;
//   },
//   getLength() {
//     const lengthObj = Object.keys(persons).length;
//     return lengthObj;
//   },
// };
// console.log(persons.getInfo());

// console.log(persons.getLength());

// const arrObj = [
//   {
//     vorName: "Misha1",
//     nachName: "Sclifos1",
//     alt: 19,
//     beruf: "gdjkldj",
//     stadt: "Berlin",
//   },
//   {
//     vorName: "Ella",
//     nachName: "Rotary",
//     alt: 37,
//     beruf: "mother ",
//     stadt: "Berlin",
//   },
//   {
//     vorName: "Valeria",
//     nachName: "Sclifos1",
//     alt: 12,
//     beruf: "schuler",
//     stadt: "Berlin",
//   },
// ];

const myMath = {
  getCeil(num) {
    return parseInt(num) + 1;
  },
  getFloor(num) {
    return parseInt(num);
  },
  getPow(y, z) {
    return y ** z;
  },
  getSQRT(s) {
    for (let i = s; i > 0; i--) {
      if ((s / i) % i === 0) return i;
    }
  },
  getAbs(num) {
    return num < 0 ? num * -1 : num;
  },
};
console.log(myMath.getCeil(2.3));
console.log(myMath.getFloor(2.3));
console.log(myMath.getPow(2, 3));
console.log(myMath.getSQRT(16));
console.log(myMath.getAbs(1));
console.log(myMath.getAbs(-1));
