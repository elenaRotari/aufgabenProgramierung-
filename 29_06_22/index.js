const meineVorname = "Elena";
const meinLand = "Moldova";
let meinLieblingEssen1 = "Cesar Salat";
let meinLieblingEssen2 = "Cheescake";
let meinAlt = 37;
const meinGeburtsJahr = 1985;

console.log(
  "Hallo ich bin " +
    meineVorname +
    " und ich komme aus " +
    meinLand +
    ".\nMeine Lieblingsspeisen sind " +
    meinLieblingEssen1 +
    " und " +
    meinLieblingEssen2 +
    ".\nIch bin " +
    meinAlt +
    " Jahre alt und " +
    meinGeburtsJahr +
    " geboren."
);

const wasserTiefe = 300;
const wasserVolume = 3750;
const kostenGrunden = 5;

const keineWettKampfe = (wasserVolume / wasserTiefe) * kostenGrunden;

console.log(keineWettKampfe);

const verbrauchAuto = 8;
const weitWeg = 100;
const tankFuhlung = 66;

const tankFuhlung66 = (weitWeg * tankFuhlung) / verbrauchAuto;
console.log(tankFuhlung66);

const arbeiterTeer = 3;
const zeitDafur = 17;
const arbeiterMehr = 5;

const zeitMehrArbeiter = (arbeiterTeer * zeitDafur) / arbeiterMehr;
console.log(zeitMehrArbeiter);

const nummer1 = 882;
const nummer2 = 14;
const nummer3 = 12;
const nummer4 = 2.3;
const nummer5 = 999;

const ergebniss = (((nummer1 / nummer2) * nummer3) / nummer4) * nummer5;

console.log(ergebniss);

const nummer12 = 12;
const nummer23 = 7;
const nummer34 = 17;
const nummer45 = 7;
const nummer56 = 17;
const nummer67 = 333;

const ergebniss1 =
  (nummer12 * nummer23 * nummer34) / nummer45 / nummer56 + nummer67;

console.log(ergebniss1);

const langeGarten = 1680;
const sockelVerbrauch = 120;
const preisSockel = 24.4;

const gessamtePreis = (langeGarten / sockelVerbrauch) * preisSockel;

console.log(gessamtePreis);
