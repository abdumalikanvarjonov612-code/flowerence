/* 4-qadam: Interaktivlik (JS) */
document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    let totalPrice = 0;
    const cartItems = [];
    
    const cartDisplay = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.add-to-cart');
    
    // Modal elements
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    // Add to cart
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const priceText = productCard.querySelector('.price').innerText;
            const price = parseInt(priceText.replace(/[^0-9]/g, ''));
            
            cartCount++;
            totalPrice += price;
            cartDisplay.innerText = cartCount;
            
            cartItems.push({ name: productName, price: price });
            
            // Visual effect
            const originalText = button.innerText;
            button.innerText = "Qo'shildi!";
            button.style.background = "#9DC183";
            
            setTimeout(() => {
                button.innerText = originalText;
                button.style.background = "#2C3E50";
            }, 1500);
        });
    });

    // Open Modal
    cartBtn.addEventListener('click', () => {
        updateCartModal();
        cartModal.style.display = 'block';
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function updateCartModal() {
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Savatingiz hozircha bo\'sh.</p>';
        } else {
            cartItemsContainer.innerHTML = '';
            cartItems.forEach(item => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString('uz-UZ')} so'm</p>
                `;
                cartItemsContainer.appendChild(div);
            });
        }
        cartTotalPrice.innerText = totalPrice.toLocaleString('uz-UZ');
    }
});
