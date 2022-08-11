const symmetricDiff2 = (arg1, arg2) => {
  arg1 = [...new Set([...arg1])];
  arg2 = [...new Set([...arg2])];
  const arg3 = arg1.concat(arg2);

  return arg3.filter((i) => !(arg3.indexOf(i) !== arg3.lastIndexOf(i)));
};

console.log(symmetricDiff2([1, 2], []));
console.log(symmetricDiff2([1, 2], [1]));
console.log(symmetricDiff2([1, 2], [1, 3]));
console.log(symmetricDiff2([1, 2, 3], [5, 2, 1, 4]));
console.log(symmetricDiff2([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symmetricDiff2([1, 2, 3], [5, 2, 1, 4, 5]));
