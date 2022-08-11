//aufgabe 1.1
const aufgabe1_1 = "rgb(247, 101, 101)";
const rot1 = aufgabe1_1.substring(4, 7);
const rotVerringer = +rot1 - 80;
const green1_1 = aufgabe1_1.substring(9, 12);
const blau1_1 = aufgabe1_1.substring(13, 17);
const result1_1 = `rgb(${rotVerringer},${green1_1},${blau1_1})`;

console.log({ result1_1 });
//augabe 1.2
const aufgabe1_2 = "rgb(21, 35, 112)";
const rot1_2 = aufgabe1_2.substring(4, 6);
const green1 = aufgabe1_2.substring(8, 10);
const greenErhohen1 = +green1 + 75;
const blau1 = aufgabe1_2.substring(11, 15);
const blauErhohen1 = +blau1 + 100;
const result1_2 = `rgb(${rot1_2}, ${greenErhohen1}, ${blauErhohen1})`;

console.log({ result1_2 });

//aufgabe 1.3

const aufgabe1_3 = "rgb(167, 249, 85)";
const rot1_3 = aufgabe1_3.substring(4, 7);
const viertelReduceRot = +rot1_3 * 0.25;
const blau1_3 = aufgabe1_3.substring(14, 16);
const viertelReduceBlau = +blau1_3 * 0.25;
const green1_3 = aufgabe1_3.substring(9, 12);
const result1_3 = `rgb(${Math.floor(
  viertelReduceRot
)}, ${green1_3}, ${Math.floor(viertelReduceBlau)})`;

console.log({ result1_3 });

//###Aufgabe 2
//#### aufgabe 2.1

const aufgabe2_1 = "rgb(127, 255, 100)";

const rot2_1 = parseInt(aufgabe2_1.substring(4, 7)).toString(16);
const green2_1 = parseInt(aufgabe2_1.substring(9, 12)).toString(16);
const blue2_1 = parseInt(aufgabe2_1.substring(14, 17)).toString(16);
const result2_1 = `hex: #${rot2_1}${green2_1}${blue2_1}`;

console.log({ result2_1 });

//##aufgabe 2.2

const aufgabe2_2 = "#E23F76";
const rot2_2 = parseInt(aufgabe2_2.slice(1, 3), 16);
const green2_2 = parseInt(aufgabe2_2.slice(3, 5), 16);
const blau2_2 = parseInt(aufgabe2_2.slice(5), 16);
const result2_2 = `rgb(${rot2_2},${green2_2},${blau2_2})`;
console.log({ result2_2 });

//aufgabe2_3
const aufgabe2_3 = "rgb(229, 13, 218)";
const rot2_3 = parseInt(aufgabe2_3.substring(4, 7)).toString(16);

const green2_3 = parseInt(aufgabe2_3.substring(8, 11)).toString(16);

const greenPads2 = green2_3.padStart(2, "0");

const blau2_3 = parseInt(aufgabe2_3.substring(13, 16)).toString(16);

const result2_3 = `hex: #${rot2_3}${greenPads2}${blau2_3}`;
console.log({ result2_3 });
//aufgabe2.4

const aufgabe2_4 = "#02D633";
const rot2_4 = parseInt(aufgabe2_4.slice(1, 3), 16);
const green2_4 = parseInt(aufgabe2_4.slice(3, 5), 16);
const blau2_4 = parseInt(aufgabe2_4.slice(5), 16);

const result2_4 = `rgb(${rot2_4},${green2_4},${blau2_4})`;
console.log({ result2_4 });

//###Aufgabe 3.1

const aufgabe3_1 = "rgb(71, 171, 247) ";
const rot3_1 = parseInt(aufgabe3_1.substring(4, 6)) + 100;
const rot3added = rot3_1.toString(16);

const green3_1 = parseInt(aufgabe3_1.substring(8, 11)).toString(16);
const blau3_1 = parseInt(aufgabe3_1.substring(13, 17)).toString(16);
const result3_1 = `hex: #${rot3added}${green3_1}${blau3_1}`;

console.log({ result3_1 });

///##Aufgabe3.2

const aufgabe3_2 = "rgb(59, 31, 242) ";

const rot3_2 = parseInt(aufgabe3_2.slice(4, 7)).toString(16);

const green3_2 = parseInt(aufgabe3_2.slice(8, 11)) - 31;
const greenSmaller = green3_2.toString(16);
const blau3_2 = parseInt(aufgabe3_2.slice(12, 15)) - 200;

const blauSmaller = blau3_2.toString(16);

const result3_2 = `hex: #${rot3_2}${greenSmaller}${greenSmaller}${blauSmaller}`;
console.log({ result3_2 });

//Aufgabe 3.3
const aufgabe3_3 = "#6BFF95";

const rot3_3 = 148 + parseInt(aufgabe3_3.slice(1, 3), 16);
const green3_3 = parseInt(aufgabe3_3.slice(3, 5), 16);
const blau3_3 = parseInt(aufgabe3_3.slice(5), 16) * 0;
const result3_3 = `rgb(${rot3_3},${green3_3},${blau3_3})`;

console.log({ result3_3 });

//aufgabe3.4
const aufgabe3_4 = "#234042";
const rot3_4 = parseInt(aufgabe3_4.slice(1, 3), 16) * 1.5;
const green3_4 = parseInt(aufgabe3_4.slice(3, 5), 16) * 1.5;
const blau3_4 = parseInt(aufgabe3_4.slice(5), 16) * 1.5;
const result3_4 = `rgb(${Math.floor(rot3_4)},${green3_4},${blau3_4})`;

console.log({ result3_4 });

//aufgabe 3.5

const aufgabe3_5 = "rgb(165, 21, 50)";

const rot3_5 = Math.round(parseInt(aufgabe3_5.slice(4, 7)) * 0.25);

const rot3_5_1 = rot3_5.toString(16);
const green3_5 = parseInt(aufgabe3_5.slice(8, 11)).toString(16);
const blau3_5 = Math.round(parseInt(aufgabe3_5.slice(12, 15)) * 0.25);

const blau3_5_1 = blau3_5.toString(16);
const blauPads = blau3_5_1.padStart(2, "0");
const result3_5 = `hex: #${rot3_5_1}${green3_5}${blauPads}`;
console.log({ result3_5 });

//Bonusaufgabe padsStarts & end

// const aufgabeBonus = "rgb(23, 565, 157)";
// const letBonus = aufgabeBonus.slice(4, -1);
// const resultBonus = letBonus.padStart(aufgabeBonus.length);
// const resultBonus1 = parseInt(letBonus).toString(16);

// console.log(`${resultBonus1} `);
