const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme", "Tofu", "Müsli", "Toaster", "Kaugummi"];

let teuerste = cost[0];
let guenstigste = cost[0];
let summe = 0;

for (let i = 0; i < cost.length; i++) {
  if (teuerste < cost[i]) {
    teuerste = cost[i];
  }
  if (guenstigste > cost[i]) {
    guenstigste = cost[i];
  }
  summe += cost[i];
}
console.log(
  `Das teuerste Produkt ist: ${productNames[cost.indexOf(teuerste)]}`
);
console.log(
  `Das günstigste Produkt ist: ${productNames[cost.indexOf(guenstigste)]}`
);
console.log(`Die Summe aller Produkte ist: ${summe}€`);

let amounts = [4, 1, 2, 1, 3];
let summeAmounts = 0;

for (let i = 0; i < cost.length; i++) {
  summeAmounts += cost[0] * amounts[0];
}

console.log(summeAmounts);
