document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchButton").addEventListener("click", async () => {
        const query = document.getElementById("searchBox").value.trim();
        if (!query) {
            displayError("Please enter a search query.");
            return;
        }
        const apiKey = "d7648cc41455edfc02f1bb19c1ed8b57e1699300e62a2d608e11ed44d9349275";
        const baseUrl = "https://serpapi.com/search";
        const apiUrl = `${baseUrl}?engine=google_scholar&api_key=${apiKey}&q=${encodeURIComponent(query)}`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayResults(data);
        } catch (error) {
            displayError(error.message);
        }
    });

    function displayResults(data) {
        const responseContainer = document.getElementById("apiResponse");
        responseContainer.innerHTML = `
            <h2>Results:</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    }

    function displayError(message) {
        const responseContainer = document.getElementById("apiResponse");
        responseContainer.innerHTML = `
            <h2>Error:</h2>
            <p>${message}</p>
        `;
    }
});