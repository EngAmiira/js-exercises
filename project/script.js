// 1. Initialize data
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// 2. The Save Function
function saveInterest(serviceName) {
    // Check if it's already there
    if (!wishlist.includes(serviceName)) {
        wishlist.push(serviceName);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert("✨ " + serviceName + " added to your wishlist!");
    } else {
        alert("You already have this in your wishlist.");
    }
    
    // Force the list to refresh if we are currently looking at the profile
    if (document.getElementById('wishlist-items')) {
        displayWishlist();
    }
}

// 3. The Display Function
function displayWishlist() {
    const listContainer = document.getElementById('wishlist-items');
    
    // Stop if the container isn't on the current page
    if (!listContainer) return;

    if (wishlist.length === 0) {
        listContainer.innerHTML = '<p style="color:#888;">No items in wishlist yet.</p>';
    } else {
        listContainer.innerHTML = wishlist.map((item, index) => `
            <li style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                <span>${item}</span>
                <button onclick="removeFromWishlist(${index})" style="background:none; border:none; color:#d4a373; cursor:pointer; font-weight:bold;">REMOVE</button>
            </li>
        `).join('');
    }
}

// 4. The Remove Function
function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

// Ensure the list loads as soon as the page opens
document.addEventListener('DOMContentLoaded', displayWishlist);