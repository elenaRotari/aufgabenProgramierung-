/**
 * Author: Fantasia
 * Projekt: Signup Seite
 * Feature: Password Validierung
 * Company: Tranzfer
 */
// Password das der Nutzer eingegeben hat
// Zum Testen verändern
let password = "test!";
// State Variablen
let isPasswordSafe = password ? true : false;
let errorMessages = [];

// Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
if (password.length <= 6) {
  isPasswordSafe = false;
  errorMessages.push("Password nicht lang genug");
}
// console.log(errorMessages);
// Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
if (
  !(
    password.includes("!") ||
    password.includes("$") ||
    password.includes("%") ||
    password.includes("&") ||
    password.includes("+") ||
    password.includes("#")
  )
) {
  isPasswordSafe = false;
  errorMessages.push("Passwort muss Sonderzeichen enthalten");
}
console.log(errorMessages);

// Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten
if (password.indexOf("password") > 5 || password.indexOf("123456") > 4) {
  isPasswordSafe = false;
  errorMessages.push("Passwort darf keine leichten Worte enthalten");
}

// Zum Schluss gibt das Programm aus ob das Passwort sicher ist
console.log("Überprüfung abgeschlossen.");
console.log(
  (isPasswordSafe = true
    ? "Passwort ist sicher."
    : "Passwort ist nicht sicher!")
);
if ((isPasswordSafe = true)) {
  console.log("Anmeldung kann fortfahren.");
} else if ((isPasswordSafe = false)) {
  console.log("Es gab folgende Fehler:");
} else {
  console.log(errorMessages.join(""));
}
console.log(isPasswordSafe);
