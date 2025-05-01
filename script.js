// Show product images based on category and subcategory
function showImages(category, subcategory) {
  const imgContainer = document.getElementById('product-grid');
  let html = `<h3>${category} → ${subcategory}</h3>`;

  // Handle the "Personalizzate" category with print names
  if (subcategory === 'Personalizzate') {
      html += `
          <h4>Choose Print Names</h4>
          <ul>
              <li><button onclick="showPrintNames('Uomini', 'Personalizzate', 'Name1')">Name1</button></li>
              <li><button onclick="showPrintNames('Uomini', 'Personalizzate', 'Name2')">Name2</button></li>
              <li><button onclick="showPrintNames('Uomini', 'Personalizzate', 'Name3')">Name3</button></li>
              <li><button onclick="showPrintNames('Uomini', 'Personalizzate', 'Name4')">Name4</button></li>
          </ul>
      `;
  } else {
      // Show product images for Ricamato and Serigrafata categories
      html += `<div class="grid">`;

      for (let i = 1; i <= 3; i++) {
          const path = `images/${category}/${subcategory}/${subcategory}_${i}.jpg`.replace(/ /g, "_");
          html += `
              <div style="margin:10px; text-align:center;">
                  <img src="${path}" style="width:200px;" alt="${subcategory}">
                  <p><strong>Taglie:</strong> S, M, L, XL<br><strong>Colori:</strong> Rosso, Nero, Blu</p>
              </div>`;
      }

      html += `</div>`;
  }

  imgContainer.innerHTML = html;
}

// Show available print names for Personalizzate
function showPrintNames(category, subcategory, name) {
  const imgContainer = document.getElementById('product-grid');
  imgContainer.innerHTML = `<h3>${category} → ${subcategory} → Print: ${name}</h3>`;

  // Sample display for each print name (you can customize per name)
  imgContainer.innerHTML += `
      <div style="margin:10px; text-align:center;">
          <p><strong>Print Name:</strong> ${name}</p>
          <img src="images/${category}/${subcategory}/${name}.jpg" style="width:200px;" alt="${name}">
          <p><strong>Taglie:</strong> S, M, L, XL<br><strong>Colori:</strong> Rosso, Nero, Blu</p>
      </div>
  `;
}
