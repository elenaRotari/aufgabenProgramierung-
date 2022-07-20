//1. Erstelle eine Funktion, die jeden Anfangsbuchstaben der Wörter eines Strings in einen Großbuchstaben umwandelt. Anschließend soll die Funktion den String zurückgeben.

console.log("-----Aufgabe1 ------");

function ersteBuchstabeUpperCase(str) {
  if (typeof str !== "string") {
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
    "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  )
);

//2 2. Entwickle eine Funktion, die einen gegebenen Text auf maximal 30 Wörter gekürzt zurückgibt. Ist der Text länger als 30 Wörter, soll in der Ausgabe ein "..." am Ende angefügt werden.

console.log("-----Aufgabe2 ------");
function maxThirty(arr) {
  // if (!(typeof arr === "string")) {
  //   return "Invalides Argument! Es muss ein String übergeben werden!";
  // }
  // return arr.split(" ").splice(0, 30).join(" ") + "...";

  const result1 = arr.split(" ");

  const name = new Array(30);
  const result2 = result1.slice(0, name.length);
  console.log(result2.length);
  console.log(result1.length); //   if (result1.length > 30) {
  //     return result2.join(" ") + "...";
  //   }
  //   return result2.join(" ");
  // }
}

console.log(
  maxThirty(
    "orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry."
  )
);

console.log("-----Aufgabe3 ------");

function bothExercise(params) {
  // return maxThirty(ersteBuchstabeUpperCase(params));
  return ersteBuchstabeUpperCase(maxThirty(params));
}
console.log(
  bothExercise(
    "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  )
);
//// ich benutze keine globalen variablen, somit modifiziere ich keine. Meine Functionen benutze nur Übergabeparameter
