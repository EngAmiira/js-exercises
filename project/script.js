// --- 1. Initialize Wishlist Data ---
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// --- 2. Save to Wishlist ---
function saveInterest(serviceName) {
    if (!wishlist.includes(serviceName)) {
        wishlist.push(serviceName);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert("✨ " + serviceName + " added to your wishlist!");
    } else {
        alert("Already in your wishlist.");
    }
    if (document.getElementById('wishlist-items')) displayWishlist();
}

// --- 3. Display Wishlist ---
function displayWishlist() {
    const listContainer = document.getElementById('wishlist-items');
    if (!listContainer) return;

    if (wishlist.length === 0) {
        listContainer.innerHTML = '<p style="color:#888;">No items in wishlist yet.</p>';
    } else {
        listContainer.innerHTML = wishlist.map((item, index) => `
            <li style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>${item}</span>
                <button onclick="removeFromWishlist(${index})" style="background:none; border:none; color:#d4a373; cursor:pointer;">REMOVE</button>
            </li>
        `).join('');
    }
}

function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

// --- 4. BOOKING LOGIC (Fixed IDs to match your HTML) ---
const bookingForm = document.getElementById('bookingForm'); // Matches your <form id="bookingForm">

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        // Capturing the specific IDs from your provided HTML
        const appointmentData = {
            name: document.getElementById('userName').value,      // Changed from fullName to userName
            service: document.getElementById('serviceSelect').value,
            date: document.getElementById('bookDate').value
        };

        localStorage.setItem('activeBooking', JSON.stringify(appointmentData));
        alert("Booking Successful! Redirecting...");
        window.location.href = 'profile.html'; 
    });
}

// --- 5. DISPLAY ON PROFILE ---
function displayBooking() {
    const infoBox = document.getElementById('user-info'); // Matches your <div id="user-info">
    const savedData = JSON.parse(localStorage.getItem('activeBooking'));

    if (savedData && infoBox) {
        infoBox.innerHTML = `
            <div style="text-align: left; background: #fdfaf6; padding: 15px; border-radius: 8px;">
                <p><strong>Name:</strong> ${savedData.name}</p>
                <p><strong>Service:</strong> ${savedData.service}</p>
                <p><strong>Date:</strong> ${savedData.date}</p>
            </div>
        `;
    }
}

// --- 6. CANCEL BOOKING ---
function clearAppointment() {
    localStorage.removeItem('activeBooking');
    location.reload();
}

// Load everything when the page opens
document.addEventListener('DOMContentLoaded', () => {
    displayWishlist();
    displayBooking();
});