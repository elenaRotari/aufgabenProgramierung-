const API_URL = "api.sparkasse.de/v3/accounts";
const API_KEY = "lwqdjOI987HHUIaihjaskdh"; // wichtige VARIABLEN KÖNNEN WIR AUCH MIT GROSSE BUCHSTABE
const transferCustomerId = "transfer-009"; // camelCase benutzt
const bankName = "Sparkasse"; // camelCase benutzt
console.log("Initialisiere Verbindung..."); //klamern auf und zu immer
console.log("Verbindung mit " + bankName + " hergestellt"); // kompielieren immer mit " + name * ", console.log
let kunde1 = "Jan Müller"; // variable nie mit ein zahl beginnt
let kunde2 = "Martina Stein"; // variable nie mit ein zahl beginnt
let iban1 = "1234 0000 9908 9999"; //variable werden  nur einmal mit den gleiche name definiert
let iban2 = "1222 0000 9908 9999";
let betrag = 23.3; // decimal sind immer nur mit ein puct definiert, und immer space between variable und name
console.log("Starte Überweisung");
console.log(`Von ${kunde1} IBAN: ${iban1}`); // Anführungszeichen  weg und backstick benutzen
console.log(`Nach ${kunde2} IBAN: ${iban2}`); // Anführungszeichen  weg und backstick benutzen
console.log(`Sende Betrag ${betrag}€`); //richtig
console.log("Überweisung erfolgreich"); //richtig
//Transaktionsdauer erfassen
const bankName1 = "Sparkasse Berlin"; //variable benutzen
let transaktionsDauer; // const kann nicht andern
transaktionsDauer = 100; // richtig
console.log("Beende Verbindung..."); // richtig
console.log("Verbindung mit " + bankName1 + " beendet"); // wir können nur die gleiche  "" oder '' oder `` benutzen , nicht verschiedene
console.log("Dauer der Transaktion " + transaktionsDauer + "s"); //richtig
