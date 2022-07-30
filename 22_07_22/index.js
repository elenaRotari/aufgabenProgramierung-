//Eine natürliche Zahl größer als 1 ist eine Primzahl, wenn sie nur durch sich selbst und durch 1 teilbar ist.

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return false;
  return true;
}

console.log(isPrime(3));

//for loops
for (let i = 0; i < 10; i++) {
  console.log(("test", i));
}

//while loops
let i = 10;
while (i < 10) {
  console.log("test", i);
  i++;
}
//// Do while loops
i = 0;
do {
  console.log("test", i++);
} while (i < 10);

const numberDursch = [2, 5, 7, 11, 34];
const numberDursch1 = [2, 5, 65, 11, 34];
const numberDursch2 = [2, 345, 7, 11, 34];
function durschnitt(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str[i];
  }
  return sum / str.length;
}

console.log(durschnitt(numberDursch));
console.log(durschnitt(numberDursch1));
console.log(durschnitt(numberDursch2));
