
const subMap = {
  'Uomini': ['Ricamato', 'Serigrafata', 'Personalizzate'],
  'Donne': ['Ricamato', 'Serigrafata', 'Personalizzate'],
  'Bambini': ['Ricamato', 'Serigrafata', 'Personalizzate'],
  'Neonati': ['Ricamato', 'Serigrafata', 'Personalizzate'],
  'Tutti': []
};

function showSub(category) {
  const subContainer = document.getElementById('sub-buttons');
  subContainer.innerHTML = '';

  const subcategories = subMap[category] || [];
  if (subcategories.length === 0) {
    document.getElementById('product-grid').innerHTML = `<p>Mostrando tutti i prodotti.</p>`;
    return;
  }

  subcategories.forEach(sub => {
    const btn = document.createElement('button');
    btn.textContent = sub;
    btn.onclick = () => {
      document.getElementById('product-grid').innerHTML = `<p>Mostrando prodotti per <strong>${category}</strong> → <strong>${sub}</strong></p>`;
    };
    subContainer.appendChild(btn);
  });

  document.getElementById('product-grid').innerHTML = `<p>Seleziona una sottocategoria.</p>`;
}
