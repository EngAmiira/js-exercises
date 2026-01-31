const list = document.querySelector('#myList');
const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');

function addItem() {
  const newItem = document.createElement('li');
  newItem.textContent = `New Item (${list.children.length + 1})`;
  list.appendChild(newItem);
}
function removeItem() {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
  } else {
    console.log("No items left to remove!");
  }
}

addBtn.addEventListener('click', addItem);
removeBtn.addEventListener('click', removeItem);