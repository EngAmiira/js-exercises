const image = document.querySelector('#dynamicImage');
const button = document.querySelector('#updateBtn');

function changeImage() {
 
  const newUrl = prompt("Enter a new image URL:");
  const newBorderColor = prompt("Enter a border color (e.g., red, #00ff00):");
  const newWidth = prompt("Enter width in pixels (e.g., 300):");
  const newHeight = prompt("Enter height in pixels (e.g., 200):");
  const newRadius = prompt("Enter border radius in pixels (e.g., 20):");

  
  if (newUrl) image.src = newUrl;


  image.style.border = `5px solid ${newBorderColor || 'black'}`;
  image.style.width = `${newWidth}px`;
  image.style.height = `${newHeight}px`;
  image.style.borderRadius = `${newRadius}px`;

  console.log("Image styles updated successfully!");
}

button.addEventListener('click', changeImage);