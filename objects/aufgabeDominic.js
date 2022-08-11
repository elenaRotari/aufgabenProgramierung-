const usersList = [
  {
    email: " petermueller@web.de",
    vorname: "Peter",
    nachname: "Mueller",
    interesGebit: [],
    year: 2000,
    users,
  },

  {
    email: " sarah@schmidt.de",
    vorname: "Sarah",
    nachname: "Schmidt",
    interesGebit: ["Musik", "It und Reisen"],
    year: 2658,
    users,
  },

  {
    email: " pellentesque.tincidunt.tempus@outlook.org",
    vorname: "Raja",
    nachname: "Underwood",
    interesGebit: ["Musik", "It", "Reisen "],
    users,
    year: 2001,
  },
  {
    email: " aliquet@protonmail.net",
    vorname: "Owen",
    nachname: "Bennett",
    interesGebit: ["Programieren", "Nachriten", "Aktien"],
    users,
    year: 2004,
  },
];

function users() {
  return `${this.vorname} ${this.nachname} ist mit Adresse ${this.email} seit ${
    this.year
  } regestriert und ${
    this.interesGebit.length !== 0
      ? "erhält Newsletter zu den Themen: " +
        this.interesGebit.splice(0, this.interesGebit.length - 1) +
        " und " +
        this.interesGebit.splice(this.interesGebit.length - 1)
      : "hat keinen Themen angegeben "
  }`;
}

for (let i = 0; i < usersList.length; i++) {
  console.log(usersList[i].users());
}
