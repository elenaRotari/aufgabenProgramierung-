// Fibonacci Zahlen
console.log("--------------aufgabe1------------");
function fibonacciZAhlen1(arg1, arg2) {
  return arg1 + arg2;
}
console.log(fibonacciZAhlen1(5, 8));
console.log(fibonacciZAhlen1(0, 1));
console.log(fibonacciZAhlen1(21, 34));
console.log(fibonacciZAhlen1(7, 89));
// console.log("--------------aufgabe2------------");
// function fibonaccizahlen2(num) {
//   const fibo = [];
//   fibo[0] = 0;
//   fibo[1] = 1;
//   for (let i = 2; i < num; i++) {
//     fibo[i] = fibo[i - 2] + fibo[i - 1];
//   }
//   return fibo;
// }
// console.log(fibonaccizahlen2(10));
// console.log(fibonaccizahlen2(50));
// console.log(fibonaccizahlen2(144));
// console.log("--------------aufgabe2.1------------");
function fibonaccizahlen3(num) {
  const fibo = [0, 1];

  while (num > fibo[fibo.length - 1]) {
    fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
  }
  fibo.pop();
  return fibo;
}
console.log(fibonaccizahlen3(10));
console.log(fibonaccizahlen3(50));
console.log(fibonaccizahlen3(144));
// console.log("--------------aufgabe2.2------------");

function fibonaccizahlen4(num) {
  const result = [0, 1];
  while (result[result.length - 1] < num - result[result.length - 2]) {
    const sum = result[result.length - 1] + result[result.length - 2];
    result.push(sum);
  }
  return result;
}
console.log(fibonaccizahlen4(10));
console.log(fibonaccizahlen4(50));
console.log(fibonaccizahlen4(144));
