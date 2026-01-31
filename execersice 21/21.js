const numbers = [1, 2, 3, 4, 5];

const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(product); 