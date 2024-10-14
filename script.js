async function fetchProducts() {
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <img src="${product.image}" alt="${product.name}" style="width:100%">
        `;
        container.appendChild(productDiv);
    });
}

fetchProducts();
