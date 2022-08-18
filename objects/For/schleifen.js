console.log("-----EX1-----");
const isWithinRange = (number, { min, max }) => {
  return min <= number && number <= max;
};
console.log(isWithinRange(4, { min: 4, max: 5 }));
console.log(isWithinRange(4, { min: 5, max: 5 }));
console.log(isWithinRange(4, { min: 6, max: 5 }));
console.log(isWithinRange(5, { min: 5, max: 9 }));

console.log("-----EX2-----");

const calcMaxScrabbleScore = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element.score;
  });
  return sum;
};

console.log(
  calcMaxScrabbleScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },

    { tile: "E", score: 1 },
  ])
);
console.log("-----EX2b-----");

const calcMaxScrabbleScore1 = (arr) => {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i].score;
  }
  return sum1;
};
console.log(
  calcMaxScrabbleScore1([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },

    { tile: "E", score: 1 },
  ])
);
console.log("-----EX2c-----");
const calcMaxScrabbleScore2 = (arr) => {
  const sum = arr.reduce((acc, { score }) => {
    return (acc += score);
  }, 0);
  return sum;
};

console.log(
  calcMaxScrabbleScore2([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },

    { tile: "E", score: 1 },
  ])
);

console.log("-----EX3-----");
const isEmptyObject = (obj) => {
  return Object.keys(obj).length > 0;
};
console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: 1 }));

console.log("-----EX4-----");
const countLetters = (str) => {
  return str.split("").reduce((acc, el) => {
    if (acc[el] === undefined) acc[el] = 0;
    acc[el] += 1;
    return acc;
  }, {});
};
console.log(countLetters("tree"));
console.log(countLetters("treeeeee"));

console.log("-----EX5-----");

const freeShipping = (obj) => {
  const sum = Object.values(obj).reduce((acc, el) => acc + el);
  return sum >= 50;
};
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

console.log("-----EX6-----");
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: false,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes",
  worthwhile() {
    return `Learning the programming languages : ${this.languages} ist ${
      this.isChallenging && this.isRewarding
        ? " lohnend und herausfordernd"
        : "nicht lohnend und herausfordernd"
    }`;
  },
};

programming.languages = ["JavaScript", "Python", "Ruby", "Go"];
programming.difficulty = 7;
delete programming["jokes"];
programming.isFun = true;
for (const key in programming) {
  console.log(key);
}
const secured = console.log(programming);
console.log(programming.worthwhile());
