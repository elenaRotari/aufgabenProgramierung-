const cards = [
  "2 Pik",
  "3 Pik",
  "4 Pik",
  "5 Pik",
  "6 Pik",
  "7 Pik",
  "8 Pik",
  "9 Pik",
  "10 Pik",
  "Bube Pik",
  "Dame Pik",
  "König Pik",
  "Ass Pik",
  "2 Kreuz",
  "3 Kreuz",
  "4 Kreuz",
  "5 PKreuzik",
  "6 Kreuz",
  "7 Kreuz",
  "8 Kreuz",
  "9 Kreuz",
  "10 Kreuz",
  "Bube Kreuz",
  "Dame Kreuz",
  "König Kreuz",
  "Ass Kreuz",
  "2 Karo",
  "3 Karo",
  "4 Karo",
  "5 Karo",
  "6 Karo",
  "7 Karo",
  "8 Karo",
  "9 Karo",
  "10 Karo",
  "Bube Karo",
  "Dame Karo",
  "König Karo",
  "Ass Karo",
  "2 Herz",
  "3 Herz",
  "4 Herz",
  "5 Herz",
  "6 Herz",
  "7 Herz",
  "8 Herz",
  "9 Herz",
  "10 Herz",
  "Bube Herz",
  "Dame Herz",
  "König Herz",
  "Ass Herz",
];

function getCard(str) {
  console.log(cards.length);
  let runde = 0;
  while (str.length) {
    console.log(str.splice(Math.random() * str.length, 1).join(""), runde++);
  }
  console.log("Stapel ist leer");
}

getCard(cards);

console.log();

console.log("_______Aufgabe 2________");

const numbers = "0123456789";
const signs = "!@#$%^&*()";
const bigLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetter = "abcdefghijklmnopqrstuvwxyz";

console.log("_______Aufgabe 3________");

const symmetricDiff2 = (arg1, arg2) => {
  arg1 = [...new Set([...arg1])];
  arg2 = [...new Set([...arg2])];
  const arg3 = arg1.concat(arg2);

  return arg3.filter(
    (item) => !(arg3.indexOf(item) !== arg3.lastIndexOf(item))
  );
};

console.log(symmetricDiff2([1, 2], []));
console.log(symmetricDiff2([1, 2], [1]));
console.log(symmetricDiff2([1, 2], [1, 3]));
console.log(symmetricDiff2([1, 2, 3], [5, 2, 1, 4]));
console.log(symmetricDiff2([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symmetricDiff2([1, 2, 3], [5, 2, 1, 4, 5]));

function password_generator(len) {
  var length = len ? len : 10;
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  var character = "";
  var crunch = true;
  while (password.length < length) {
    entity1 = Math.floor(string.length * Math.random() * Math.random());
    entity2 = Math.floor(numeric.length * Math.random() * Math.random());
    entity3 = Math.floor(punctuation.length * Math.random() * Math.random());
    hold = string.charAt(entity1);
    hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
    character += hold;
    character += numeric.charAt(entity2);
    character += punctuation.charAt(entity3);
    password = character;
  }
  password = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return password.substring(0, len);
}

console.log(password_generator());
