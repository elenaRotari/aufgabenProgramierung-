// Array mit alter der Mitarbeiter und dazugehörige Verkäufe in t€ pro Jahr.
const nameMitarbeiter = [
  "Toni",
  "Manfred",
  "Gabriela",
  "Antony",
  "Bill",
  "Roma",
];
const alterMitarbeiter = [45, 21, 78, 23, 54, 19];
const summeVerkäufe = [45, 32, 55, 67, 11, 9];
// Finde den Jungsten Mitarbeiter und gib sein Namen und seine Verkaufzahlen.
// Finde durchnitlicher Alter unserer mitarbeiter
// Finde das Durchnitt der Verkäufer pro Monat.
let jungste = alterMitarbeiter[0];
// let name = “”;
// let verkauf = 0;
for (let i = 1; i < alterMitarbeiter.length; i++) {
  if (jungste > alterMitarbeiter[i]) {
    jungste = alterMitarbeiter[i];
    // name = nameMitarbeiter[i];
    // verkauf = summeVerkäufe[i];
  }
}
console.log(
  `Der jungste Mitarbeiter ist ${
    nameMitarbeiter[alterMitarbeiter.indexOf(jungste)]
  }und die Verkaufzahl ist ${summeVerkäufe[alterMitarbeiter.indexOf(jungste)]}.`
);

// console.log(alterMitarbeiter.indexOf(jungste));
let alteste = alterMitarbeiter[0];
for (let j = 1; j < alterMitarbeiter.length; j++) {
  if (alteste < alterMitarbeiter[j]) {
    alteste = alterMitarbeiter[j];
  }
}
console.log(
  `Der älteste Mitarbeiter ist  ${
    nameMitarbeiter[alterMitarbeiter.indexOf(alteste)]
  } und die Verkaufzahl ist ${summeVerkäufe[alterMitarbeiter.indexOf(alteste)]}`
);
let summe = alterMitarbeiter[0];
for (let i = 1; i < alterMitarbeiter.length; i++) {
  summe += alterMitarbeiter[i];
}
console.log(
  `Durchnitlicher alter der Mitarbeiter ist ${summe / alterMitarbeiter.length}`
);
let summeVerkauf = 0;
for (let i = 0; i < summeVerkäufe.length; i++) {
  summeVerkauf += summeVerkäufe[i];
}
console.log(
  `Durchnit aller Verkäufe ist ${summeVerkauf / summeVerkäufe.length}`
);
