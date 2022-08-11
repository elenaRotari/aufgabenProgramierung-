//aufgabe 1
const random = Math.floor(Math.random() * 2) + 1;
if (random > 1) {
  console.log("ja");
} else {
  console.log("nein");
}

//aufgabe 2
const wurfelZahl = Math.floor(Math.random() * 6) + 1;
if (wurfelZahl === 6) {
  console.log(
    "Du hast die",
    wurfelZahl,
    "geworfen, du darfst noch einmal würfeln"
  );
} else {
  console.log("Du hast die ", wurfelZahl, "gewurfelt");
}
