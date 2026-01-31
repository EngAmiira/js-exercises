const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];

console.log(combined); 

function multiply(...numbers) {
   
    if (numbers.length === 0) return 0;
  
    return numbers.reduce((acc, curr) => acc * curr, 1);
  }
  
  console.log(multiply(2, 3, 4));    
  console.log(multiply(5, 10, 2));   
  console.log(multiply(7));          