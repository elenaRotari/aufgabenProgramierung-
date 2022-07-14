function istGeradeOderUngeradeZahl(x) {
  if (x % 2 === 0) {
    return `${x}ist even`;
  } else {
    return `${x} ist odd`;
  }
}
console.log(istGeradeOderUngeradeZahl(7));
console.log(istGeradeOderUngeradeZahl(3));
console.log(istGeradeOderUngeradeZahl(10));
console.log(istGeradeOderUngeradeZahl(40));

function istGeradeOderUngeradeZahl1(y) {
  if (y % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(istGeradeOderUngeradeZahl1(7));
console.log(istGeradeOderUngeradeZahl1(3));
console.log(istGeradeOderUngeradeZahl1(10));
console.log(istGeradeOderUngeradeZahl1(40));

function istGeradeOderUngeradeZahl2(y) {
  if (y % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(istGeradeOderUngeradeZahl2(7));
console.log(istGeradeOderUngeradeZahl2(3));
console.log(istGeradeOderUngeradeZahl2(10));
console.log(istGeradeOderUngeradeZahl2(40));
