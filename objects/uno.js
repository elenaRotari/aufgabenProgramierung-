const player = {
  name: "",
  hand: [],
  score: 0,
  level: "beginner",
};
// Alle Karten im Spiel
const stack = [
  { color: "green", number: "1" },
  { color: "green", number: "2" },
  { color: "green", number: "3" },
  { color: "green", number: "4" },
  { color: "green", number: "5" },
  { color: "green", number: "6" },
  { color: "green", number: "7" },
  { color: "green", number: "8" },
  { color: "green", number: "9" },
  { color: "green", number: "10" },
  { color: "green", number: "11" },
  { color: "green", number: "12" },
  { color: "green", number: "13" },
  { color: "blue", number: "1" },
  { color: "blue", number: "2" },
  { color: "blue", number: "3" },
  { color: "blue", number: "4" },
  { color: "blue", number: "5" },
  { color: "blue", number: "6" },
  { color: "blue", number: "7" },
  { color: "blue", number: "8" },
  { color: "blue", number: "9" },
  { color: "blue", number: "10" },
  { color: "blue", number: "11" },
  { color: "blue", number: "12" },
  { color: "blue", number: "13" },
  { color: "red", number: "1" },
  { color: "red", number: "2" },
  { color: "red", number: "3" },
  { color: "red", number: "4" },
  { color: "red", number: "5" },
  { color: "red", number: "6" },
  { color: "red", number: "7" },
  { color: "red", number: "8" },
  { color: "red", number: "9" },
  { color: "red", number: "10" },
  { color: "red", number: "11" },
  { color: "red", number: "12" },
  { color: "red", number: "13" },
  { color: "yellow", number: "1" },
  { color: "yellow", number: "2" },
  { color: "yellow", number: "3" },
  { color: "yellow", number: "4" },
  { color: "yellow", number: "5" },
  { color: "yellow", number: "6" },
  { color: "yellow", number: "7" },
  { color: "yellow", number: "8" },
  { color: "yellow", number: "9" },
  { color: "yellow", number: "10" },
  { color: "yellow", number: "11" },
  { color: "yellow", number: "12" },
  { color: "yellow", number: "13" },
];
const shuffledStack = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr.splice(random, 1)[0];
};
const player1 = { ...player };
player1.name = "Fantasia";
player1.hand = [...player.hand];
const player2 = { ...player };
player2.name = "Andi Feind";
player2.hand = [...player.hand];
for (let i = 0; i < 5; i++) {
  player1.hand.push(shuffledStack(stack));
  player2.hand.push(shuffledStack(stack));
}
const gameStack = [shuffledStack(stack)];
console.log(gameStack);
console.log(stack.length);
// controlam daca cardul color saun number coincide cu ultimul de pe table
const checkCard = (card) => {
  const { color, number } = gameStack[gameStack.length - 1];
  if (card.color === color || card.number === number) return true;
  return false;
};
console.log(player1.hand);
console.log(player2.hand);
const beateCard = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (checkCard(arr[i])) {
      gameStack.push(arr[i]);
      arr.splice(i, 1);
      break;
    } else if (stack.length > 0) arr.push(stack.shift());
  }
};
for (let i = 0; i < 52; i++) {
  i % 2 === 0 ? beateCard(player1.hand) : beateCard(player2.hand);
}
console.log(gameStack);
console.log(player1);
console.log(player1.hand);
console.log(player2);
console.log(player2.hand);
console.log(stack.length);
console.log(gameStack.length);
// while (player1.hand.length > 0) {}
