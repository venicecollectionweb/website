// Replace this with your Google Sheets API URL or published CSV link
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUnIop4Zhx5BRaUYGxXOmOPs5r5d_uj4PiBDCoxG_Ps8uA2ThSZQ3hkC5bhrzZDpMbzkVb7Mb_klAH/pubhtml'
// Function to fetch data from the sheet
async function fetchProductData() {
    try {
        const response = await fetch(sheetURsL);
        const csvText = await response.text();
        const data = csvToJson(csvText); // Convert CSV text to JSON format
        populateCatalog(data);  // Populate the catalog using the retrieved data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Convert CSV to JSON
function csvToJson(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        result.push(obj);
    }

    return result;
}

// Function to populate catalog dynamically
function populateCatalog(data) {
    const productGrid = document.getElementById('product-grid');
    let html = '';

    data.forEach(product => {
        html += `
            <div class="product">
                <h4>${product['Product Name']}</h4>
                <img src="${product['Image Path']}" alt="${product['Product Name']}" style="width:200px;">
                <p><strong>Colors:</strong> ${product['Colors Available']}</p>
                <p><strong>Sizes:</strong> ${product['Sizes Available']}</p>
            </div>
        `;
    });

    productGrid.innerHTML = html;
}

// Call the function when the page loads
window.onload = fetchProductData;
