// This is the key you highlighted in your RapidAPI screenshot
const API_KEY = "df807003efmshb15f5c3ef641b91p1cd21fjsn1730f709be8b"; 

document.getElementById('translateBtn').addEventListener('click', async () => {
    const text = document.getElementById('inputText').value;
    const from = document.getElementById('fromLang').value;
    const to = document.getElementById('toLang').value;
    
    // CHANGED: This now matches id="resultBox" in your HTML
    const resultBox = document.getElementById('resultBox');

    if (!text) return;
    
    resultBox.innerText = "Translating...";

    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: JSON.stringify({
            from: from,
            to: to,
            text: text
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // This matches the 'trans' property seen in your RapidAPI Results tab
        if (data && data.trans) {
            resultBox.innerText = data.trans;
        } else {
            resultBox.innerText = "Error: Invalid response structure.";
            console.log("API Error:", data);
        }
    } catch (error) {
        resultBox.innerText = "Error: Connection failed.";
        console.error(error);
    }
});