const products = [
    { id: 1, name: "PInk Dress", price: 49.99, img: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 2, name: "White Blouse", price: 39.99, img: "https://images.pexels.com/photos/2825577/pexels-photo-2825577.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 3, name: "Yellow Skirt", price: 29.99, img: "https://images.pexels.com/photos/2388237/pexels-photo-2388237.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 4, name: "Black Jacket", price: 59.99, img: "https://images.pexels.com/photos/26604623/pexels-photo-26604623.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 5, name: "White T-Shirt", price: 19.99, img: "https://images.pexels.com/photos/21378379/pexels-photo-21378379.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const cart = [];
const users = [];
const reviews = [];

// Function to display featured products on the home page
function displayFeaturedProducts() {
    const featuredProducts = document.getElementById('featured-products');
    featuredProducts.innerHTML = '';
    products.slice(0, 3).forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        featuredProducts.appendChild(productItem);
    });
}

// Function to display all products on the products page
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Function to add product to cart



// Function to handle sign up
function handleSignUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { username, email, password };
    users.push(user);

    alert('Sign up successful!');
    document.getElementById('signup-form').reset();
}

// Function to handle review submission
function handleReviewSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('review-username').value;
    const reviewText = document.getElementById('review-text').value;

    const review = { username, reviewText };
    reviews.push(review);

    displayReviews();
    document.getElementById('review-form').reset();
}

// Function to display reviews on the reviews page
function displayReviews() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <h4>${review.username}</h4>
            <p>${review.reviewText}</p>
        `;
        reviewList.appendChild(reviewItem);
    });
}

// Initialize the product list, cart, and reviews
document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home');
    if (homePage) {
        displayFeaturedProducts();
    }

    const productListPage = document.getElementById('product-list');
    if (productListPage) {
        displayProducts();
    }

    const cartPage = document.getElementById('cart-items');
    if (cartPage) {
        displayCart();
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignUp);
    }

    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
        displayReviews();
    }
});
