const vegetable = "cucumber ";
const fruit = "banana";
const food = ["bread", "cakes", "pizza"];

console.log(...food);
const [, , element] = food;
console.log(element);

const haloweenCostume = {
  misha: "witch",
  marcel: "clown",
  ella: "cat",
};
const { misha, marcel, ella } = haloweenCostume;
console.log(misha, marcel, ella);
