function countRepeatedWords(word, str) {
  const words = str.split(" ");
  let wordCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (word == words[i]) {
      wordCount++;
    }
  }
  return wordCount;
}
console.log(
  countRepeatedWords(
    "the",
    "I love the flower I love the mountain the the the "
  )
);

function longestString(str) {
  return str.reduce((a, b) => (a.length <= b.length ? b : a));
}

console.log(longestString(["the", "zulh", "uhdfiöawjd"]));

function myFunction(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(myFunction("the quick brown fox jumps over the lazy dog"));

//2
function longest_string(str_ara) {
  var max = [].length;
  str_ara.map((v) => (max = Math.max(max, v.length)));
  result = str_ara.filter((v) => v.length == max);
  return result;
}

console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));

//2
function findLongestString(arr) {
  return arr.reduce((acc, b) => {
    return acc.length <= b.length ? b : acc;
  });
}
console.log(findLongestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));

///2 option 3

function getLongestString(stringArray) {
  let longestString = "";
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestString.length) {
      longestString = stringArray[i];
    }
  }
  return longestString;
}
console.log(
  getLongestString([
    "ella",
    "jk.nqdsiasef.iljsertzhjztjuzjuzlfg.ikjseörikljglörediotjdgh",
    "marcel",
    "vaso",
    "lreolöigjdr5iouihawsefdlciuejrhfloskejrögirjluik",
  ])
);
