const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme", "Tofu", "Müsli", "Toaster", "Kaugummi"];

let teuerste = cost[0];
let guenstigste = cost[0];
let summe = 0;

// console.log(Math.max(...cost));

for (let i = 1; i < cost.length; i++) {
  // es wird über cost iterriert und es wird der i-te mit nächsten verglichen,

  if (teuerste < cost[i]) {
    teuerste = cost[i];
  }
  if (guenstigste > cost[i]) {
    guenstigste = cost[i];
  }
  summe += cost[i];
  console.log(`Durchlauf ${i}, max ${teuerste}, min ${guenstigste}, ${summe}`);
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

for (let i = 0; i < amounts.length; i++) {
  console.log(`${productNames[i]} wurde ${amounts[i]} mal verkauft`);
}

for (let i = 0; i < cost.length; i++) {
  summeAmounts += cost[i] * amounts[i];
}

console.log(`Insgesamt haben wir ${summeAmounts} bezahlt `);
