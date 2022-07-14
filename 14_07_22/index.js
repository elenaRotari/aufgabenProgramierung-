//1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.

console.log("-----Aufgabe1 ------");

function ersteBuchstabeUpperCase(str) {
  if (!(typeof str === "string")) {
    return "Invalides Argument! Es muss ein String übergeben werden!";
  }
  const arrStr = str.split(" ");
  const result = [];
  for (let i = 0; i < arrStr.length; i++) {
    result.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1));
  }
  return result.join(" ");
}
console.log(
  ersteBuchstabeUpperCase(
    "Authoritatively incentivize excellent alignments whereas sources rapidiously."
  )
);

//2 2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.

console.log("-----Aufgabe2 ------");
function maxThirty(arr) {
  if (!(typeof arr === "string")) {
    return "Invalides Argument! Es muss ein String übergeben werden!";
  }
  return arr.split(" ").splice(0, 30).join(" ") + "...";
  //   const result1 = arr.split(" ");
  //   console.log(result1.length);
  //   const result2 = result1.splice(0, 30);
  //   console.log(result2.length);

  //   return result2.join(" ");
}

console.log(
  maxThirty(
    "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise."
  )
);

console.log("-----Aufgabe3 ------");

function bothExercise(params) {
  return maxThirty(ersteBuchstabeUpperCase(params));
}
console.log(
  bothExercise(
    "Progressively repurpose best-of-breed markets whereas functional value. Collaboratively incubate multifunctional core competencies and mission-critical manufactured products. Uniquely restore progressive bandwidth rather than timely initiatives. Interactively exploit client-centric e-business without convergence. Intrinsicly brand open-source infomediaries vis-a-vis economically sound expertise."
  )
);
//// ich benutze keine globalen variablen, somit modifiziere ich keine. Meine Functionen benutze nur Übergabeparameter
