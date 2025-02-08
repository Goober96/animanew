// Cart functionality
let cart = {
    items: [],
    totalPrice: 0,
    addItem: function(productName, productPrice) {
        this.items.push({ productName, productPrice });
        this.totalPrice += productPrice;
        this.updateCartDisplay();
    },
    updateCartDisplay: function() {
        // Update cart details
        const cartCount = document.querySelector("#cart-count");
        const cartPrice = document.querySelector("#cart-total");
        
        cartCount.textContent = this.items.length;
        cartPrice.textContent = `$${this.totalPrice.toFixed(2)}`;

        // Show Checkout button if there are items in the cart
        const checkoutButton = document.querySelector("#checkout-button");
        if (this.items.length > 0) {
            checkoutButton.style.display = "block";
        } else {
            checkoutButton.style.display = "none";
        }
    }
};

// Add to Cart button event listeners
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));

        // Add item to cart
        cart.addItem(productName, productPrice);

        // Animate cart icon
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.classList.add('added');
        setTimeout(() => {
            cartIcon.classList.remove('added');
        }, 300);
    });
});

// Checkout button event
document.querySelector("#checkout-button").addEventListener("click", () => {
    alert("Proceeding to checkout...");
});
