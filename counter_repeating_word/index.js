function countRepeatedWords(word, str) {
  const words = str.split(" ");
  let wordMap = 0;

  for (let i = 1; i < words.length; i++) {
    if (word == words[i]) {
      wordMap++;
    }
  }
  return wordMap;
}
console.log(
  countRepeatedWords(
    "the",
    "I love the flower I love the mountain the the the "
  )
);

// const biggestString = (str) => {
//   str.reduce(biggestString (a, b) {
//     return a.length > b.length ? a : b
//   });
// }
//   console.log(biggestString("the", "zulh", "uhdfiöawjd"));

function myFunction(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(myFunction("the quick brown fox jumps over the lazy dog"));
