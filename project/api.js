const ACCESS_KEY = 'QnaY8wgg1oV732QEfxC_AjuLgq2jCH-qgqV4yoSIjag'; 
const apiTrendContainer = document.getElementById('api-trend');

// Update the query from 'makeup,beauty' to 'makeup-look,editorial-makeup'
async function fetchBeautyInspo() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=makeup-model,glamour-makeup&client_id=${ACCESS_KEY}`);
        const data = await response.json();

        if (apiTrendContainer) {
            apiTrendContainer.innerHTML = `
                <img src="${data.urls.regular}" 
                     alt="Beauty Trend" 
                     style="width:100%; border-radius:15px; height:200px; object-fit:cover; margin-bottom:15px;">
                <p style="font-size:0.7rem; color:var(--gold); text-align:center;">
                    Trend by ${data.user.name}
                </p>
                <button class="btn-gold" style="padding: 8px; font-size: 0.6rem;" onclick="fetchBeautyInspo()">Get New Look</button>
            `;
        }
    } catch (error) {
        console.error("API Error:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchBeautyInspo);