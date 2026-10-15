const products = [
    { id: 1, name: "Yellow Yam", weight: "1kg", price: 1200, img: "https://via.placeholder.com/150?text=Yam" },
    { id: 2, name: "Ripe Plantain", weight: "1 Bunch", price: 850, img: "https://via.placeholder.com/150?text=Plantain" },
    { id: 3, name: "Fresh Tomatoes", weight: "500g", price: 600, img: "https://via.placeholder.com/150?text=Tomatoes" },
    { id: 4, name: "Scotch Bonnet (Atarodo)", weight: "100g", price: 300, img: "https://via.placeholder.com/150?text=Chilli" }
];

let cartTotal = 0;

function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <div>
                <h4 style="margin:8px 0 4px">${p.name}</h4>
                <small>${p.weight}</small>
                <div class="price">₦${p.price}</div>
            </div>
            <button class="add-btn" onclick="addToCart(${p.price})">ADD</button>
        </div>
    `).join('');
}

window.addToCart = function(price) {
    cartTotal += price;
    document.getElementById('cart-btn').innerText = `View Cart (₦${cartTotal})`;
    alert("Added to cart! (Mobile Money Checkout Simulation)");
};

renderProducts();