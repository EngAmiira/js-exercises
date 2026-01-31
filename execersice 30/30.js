// Callback functions
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

// Higher-order function
function operate(num1, num2, callback) {
  return callback(num1, num2);
}

// Logging the results
console.log("Multiplication:", operate(10, 5, multiply)); 
console.log("Division:", operate(10, 5, divide));       
console.log("Division by Zero:", operate(10, 0, divide)); 