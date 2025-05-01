// Correct Google Sheet CSV link
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUnIop4Zhx5BRaUYGxXOmOPs5r5d_uj4PiBDCoxG_Ps8uA2ThSZQ3hkC5bhrzZDpMbzkVb7Mb_klAH/pub?output=csv'
async function fetchProductData() {
    try {
        const response = await fetch(sheetURL);
        const csvText = await response.text();
        const data = csvToJson(csvText); 
        populateCatalog(data);  
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function showImages(category, subcategory) {
    fetch(sheetURL)
        .then(response => response.text())
        .then(csvText => {
            const data = csvToJson(csvText);
            const filtered = data.filter(item =>
                item['Category']?.trim().toLowerCase() === category.toLowerCase() &&
                item['Subcategory']?.trim().toLowerCase() === subcategory.toLowerCase()
            );
            populateCatalog(filtered);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function csvToJson(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j]?.trim();
        }
        result.push(obj);
    }

    return result;
}
function filterByColor(color) {
    // Fetch product data and filter by color
    // Replace this with actual data filtering logic based on color
    const filtered = data.filter(item => item['Colors Available'].includes(color));
    populateCatalog(filtered);
}

function filterBySize(size) {
    // Filter products by size
    const filtered = data.filter(item => item['Sizes Available'].includes(size));
    populateCatalog(filtered);
}
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

window.onload = fetchProductData;
