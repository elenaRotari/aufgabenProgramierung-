const str =
  "Die split() Methode teilt ein String Objekt in ein Array von Strings auf, indem der String in Teilstrings zerteilt wird, wobei ein angegebenes Trennzeichen verwendet wird, um zu bestimmen, wo die Aufteilung erfolgen soll.";
const modifidString = str.split(" ").join("").toLowerCase();
console.log(modifidString);
​
const result = [];
for (let i = 0; i < modifidString.length; i++) {
  console.log(modifidString[i]);
  result.push([modifidString[i], 1]);
}
console.log(result);
for (let i = 0; i < result.length - 1; i++) {
  for (let j = i + 1; j < result.length; j++) {
    // console.log(result[i], i, result[j], j, result.length);
    if (result[i][0] === result[j][0]) {
      result[i][1]++;
      result.splice(j, 1);
      j--;
    }
  }
}
console.log(result);
​
const countLetters = (str) => {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    Object.keys(result).includes(str[i])
      ? result[str[i]]++
      : (result[str[i]] = 1);
  }
  return result;
};
console.log(countLetters(str));


