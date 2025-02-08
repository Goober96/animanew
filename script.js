// Initialize AOS (Animate on Scroll) library for animations
AOS.init();

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
        // Update the cart number of items and total price
        const cartCount = document.querySelector("#cart-count");
        const cartPrice = document.querySelector("#cart-total");
        
        cartCount.textContent = this.items.length;
        cartPrice.textContent = `$${this.totalPrice.toFixed(2)}`;
    }
};

// Add hover transition effect on product items
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Cart Update on Add to Cart Button Click
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));

        // Add item to cart
        cart.addItem(productName, productPrice);

        // Add smooth transition effect to the cart icon
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.classList.add('added');
        setTimeout(() => {
            cartIcon.classList.remove('added');
        }, 300);
    });
});

// Cart icon animation for smooth transitions
document.querySelector('.cart-icon').addEventListener('click', () => {
    const cartDetails = document.querySelector('.cart-details');
    cartDetails.classList.toggle('active');
});
