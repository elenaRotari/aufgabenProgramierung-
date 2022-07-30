// const myLove = {
//   firstName: "Dimulea",
//   lastName: "Gurduza",
//   age: 38,
//   job: "web developer",
//   friends: ["Roma", "Edka", "misha", "Valeria"],
// };
// console.log(myLove);
// console.log(myLove.lastName);
// console.log(myLove["firstName"]);

// const keyName = "Name";
// console.log(myLove["first" + keyName]);

// myLove.married = true;
// console.log(myLove);

// const promtation = prompt("tell me something about myLove");
// console.log(myLove[promtation]);

// console.log(myLove.friends[0]);

const myLove = {
  firstName: "Dimulea",
  lastName: "Gurduza",
  birthYear: 1983,
  job: "web developer",
  friends: ["Roma", "Edka", "misha", "Valeria"],
  married: false,

  //   calcAge: function () {
  //     return 2022 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(myLove.calcAge()); //39
console.log(myLove.age); //39

console.log(
  `${myLove.firstName} is a ${myLove.age} old ${myLove.job}, and he ${
    myLove.married ? "is" : "is not"
  } married`
);
//Dimulea is a 39 old web developer, and he  is married  →output

//challange

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi); //→27.309968138370508, 24.194608809993426
if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'BMI(${john.bmi})is heigher than ${mark.fullName}'s BMI (${mark.bmi})`
  ); //→John Smith'BMI(24.194608809993426)is heigher than Mark Miller's (27.309968138370508)
} else if (john.bmi < mark.bmi) {
  console.log(
    `${mark.fullName}'BMI(${mark.bmi})is heigher than ${john.fullName}'s BMI (${john.bmi})`
  );
}
