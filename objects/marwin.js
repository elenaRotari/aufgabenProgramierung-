// const problem = {
//   kontostand: 0,
//   iban: "DE12 1004 1004 1004 34",
//   bankname: "N26",
//   kontoinhaber: " Elena Rotary",

//   abheben(x) {
//     return this.kontostand > 0
//       ? "x€ " + "wurde erfolgreich abgehoben" + this.kontostand - x
//       : "x€ " + "konnte nicht abgehoben werden";
//   },
//   einzahlen(x) {
//     return `${x}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist  ${
//       this.kontostand + x
//     }`;
//   },
//   zeigInfo() {
//     return ` Dies ist ein Konto der ${this.bankname}.Die IBAN dieses Kontos lautet ${this.iban}`;
//   },
// };
// console.log(problem.abheben(100));
// console.log();
// console.log(problem.einzahlen(2000));
// console.log(problem.zeigInfo());

const example = [
  {
    kontostand: 0,
    iban: "DE12 1004 1004 1004 34",
    bankname: "N26",
    kontoinhaber: " Elena Rotary",
    money,
  },
  {
    kontostand: 4000,
    iban: "DE12 1004 1004 1454 34",
    bankname: "Sparkase",
    kontoinhaber: " Misha Raposatu",
    money,
  },
  {
    kontostand: 200,
    iban: "DE42 4004 1004 1004 34",
    bankname: "komerzBank",
    kontoinhaber: "Valera Somnoroasa",
    money,
  },
];

function money(x) {
  this.kontostand = this.kontostand + x;
  return `${x}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist  ${this.kontostand}€`;
}

console.log(example[2].money(2000));
console.log(example[2].kontostand);
