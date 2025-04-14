// This file contains the JavaScript code for the eCommerce website.
// It handles interactivity, such as adding products to a cart, managing user input, and updating the UI dynamically.

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = button.dataset.productPrice;

            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
            };

            cart.push(product);
            updateCartUI();
        });
    });

    function updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;

        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
        });
    }
});