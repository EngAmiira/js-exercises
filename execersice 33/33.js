const btn = document.querySelector('#changeBtn');

function changeContent() {
 
  const header = document.querySelector('#header');
  header.textContent = "Content Updated!";

 
  const description = document.querySelector('#description');
  description.innerHTML = "<ul><li>New Item 1</li><li>New Item 2</li></ul>";
  
  console.log("Content has been changed.");
}


btn.addEventListener('click', changeContent);