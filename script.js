// Interactivity for Flowerence

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const cartCount = document.querySelector('.cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    let count = 0;

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add to Cart Logic
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
            
            // Visual feedback
            btn.textContent = 'Qo\'shildi!';
            btn.style.background = '#9DC183';
            
            setTimeout(() => {
                btn.textContent = 'Savatga qo\'shish';
                btn.style.background = '#FFD1DC';
            }, 2000);

            // Simple animation for cart icon
            const icon = document.querySelector('.cart-icon i');
            icon.style.transform = 'scale(1.2)';
            setTimeout(() => icon.style.transform = 'scale(1)', 200);
        });
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll reveal animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animateElements = document.querySelectorAll('.category-card, .product-card, .feature-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(el);
    });
});
