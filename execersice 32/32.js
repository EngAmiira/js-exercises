
const mainTitle = document.querySelector('.title');
console.log("Single Element:", mainTitle.textContent);


const container = document.querySelector('#container');
console.log("Container Element:", container);


const allItems = document.querySelectorAll('.item');

console.log("All Items NodeList:", allItems);


allItems.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item.textContent}`);
});