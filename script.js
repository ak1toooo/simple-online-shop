const products = [
  { id: 1, name: "T-shirt", price: 19.99, image: "https://via.placeholder.com/150?text=T-shirt" },
  { id: 2, name: "Jeans", price: 49.99, image: "https://via.placeholder.com/150?text=Jeans" },
  { id: 3, name: "Sneakers", price: 89.99, image: "https://via.placeholder.com/150?text=Sneakers" },
  { id: 4, name: "Hat", price: 14.99, image: "https://via.placeholder.com/150?text=Hat" },
];

const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

let cart = [];

function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productDiv);
  });
}

function addToCart(productId) {
  cart.push(productId);
  cartCount.textContent = cart.length;
  alert("Added to cart!");
}

renderProducts();