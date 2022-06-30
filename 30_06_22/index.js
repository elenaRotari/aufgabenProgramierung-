const API_URL = "api.sparkasse.de/v3/accounts";
const API_key = "lwqdjOI987HHUIaihjaskdh";
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
console.log(`Von ${kunde1} IBAN: ${iban1}`);
console.log(`Nach ${kunde2} IBAN: ${iban2}`);
console.log(`Sende Betrag ${betrag}€`);
console.log("Überweisung erfolgreich");
//Transaktionsdauer erfassen
const bankName1 = "Sparkasse Berlin";
let transaktionsDauer;
transaktionsDauer = 100;
console.log("Beende Verbindung...");
console.log("Verbindung mit " + bankName1 + " beendet");
console.log("Dauer der Transaktion " + transaktionsDauer + "s");
