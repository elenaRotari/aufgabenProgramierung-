const generatePassword = (...params) => {
  const numbers = "0123456789";
  const signs = "!@#$%^&*()";
  const bigLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallLetter = "abcdefghijklmnopqrstuvwxyz";
  const getRandom = (str) => {
    return str[Math.floor(Math.random() * str.length)];
  };
  const result = [];
  while (result.length < params[0]) {
    result.push(getRandom(numbers));
    if (params[1] && result.length < params[0])
      result.push(getRandom(smallLetter));
    if (params[2] && result.length < params[0])
      result.push(getRandom(bigLetter));
    if (params[3] && result.length < params[0]) result.push(getRandom(signs));
  }
  return result.join("");
};
console.log(generatePassword(9, true, true, true));
