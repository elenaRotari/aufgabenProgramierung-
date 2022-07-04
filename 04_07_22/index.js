//###substring
const color = "rbg(255, 213, 200)";
const rot = color.substring(4, 7); // rot extrahieren
const green = color.substring(9, 12); // green extrahieren
const blue = color.substring(14, 17); // blau  extrahieren
console.log(`rot:${rot}, green:${green}, blue:${blue}`);

// .substring (startnumber endnumber )
//###.split
console.log(color.split(",")); //to one array
console.log(color.length); // lenght
console.log(color.trim());
cur;
const iterator = rot[Symbol.iterator]();
let theChar = iterator.next();
console.log(theChar.value);
console.log(
  `the number ${rot} ${color.includes(rot) ? "is" : "is not "} in the color`
);
