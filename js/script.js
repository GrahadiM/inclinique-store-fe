// ===== KONFIGURASI & DATA =====
const CONFIG = {
    colors: {
        primaryOrange: '#FA812F',
        primaryRed: '#DD0303',
        success: '#10B981'
    },
    transitions: {
        searchDelay: 500,
        debounceDelay: 300,
        animationDelay: 1500,
        resizeDelay: 400
    },
    animation: {
        observerThreshold: 0.1,
        observerRootMargin: '0px 0px -50px 0px'
    }
};

const PRODUCTS = [
    {
        id: 1,
        name: "Hydrating Serum",
        description: "Serum dengan Hyaluronic Acid untuk kulit lembap maksimal",
        price: "Rp 189.000",
        image: "https://images.unsplash.com/photo-1556228578-9f6ac5e4d0d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Serum"
    },
    {
        id: 2,
        name: "Vitamin C Cream",
        description: "Krim pagi dengan Vitamin C untuk kulit cerah dan terlindungi",
        price: "Rp 225.000",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Pelembap"
    },
    {
        id: 3,
        name: "Gentle Cleanser",
        description: "Pembersih wajah lembut untuk kulit sensitif",
        price: "Rp 145.000",
        image: "https://images.unsplash.com/photo-1570194065650-4222e69b28d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Pembersih"
    },
    {
        id: 4,
        name: "Night Repair",
        description: "Krim malam dengan Retinol untuk peremajaan kulit",
        price: "Rp 275.000",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Pelembap"
    },
    {
        id: 5,
        name: "Oil-Control Cleanser",
        description: "Pembersih dengan formula oil-free yang mengurangi produksi minyak berlebih",
        price: "Rp 165.000",
        image: "https://images.unsplash.com/photo-1556228578-9f6ac5e4d0d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Pembersih"
    },
    {
        id: 6,
        name: "Hyaluronic Acid Serum",
        description: "Serum dengan 3 jenis hyaluronic acid untuk hidrasi maksimal",
        price: "Rp 195.000",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "Serum"
    }
];

// ===== UTILITY FUNCTIONS =====
class DOMUtils {
    static toggleOverflow(hidden) {
        document.body.style.overflow = hidden ? 'hidden' : 'auto';
    }

    static showElement(element) {
        element?.classList.remove('hidden');
    }

    static hideElement(element) {
        element?.classList.add('hidden');
    }

    static addClass(element, className) {
        element?.classList.add(className);
    }

    static removeClass(element, className) {
        element?.classList.remove(className);
    }

    static toggleClass(element, className) {
        element?.classList.toggle(className);
    }

    static createStyle(css) {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
        return style;
    }
}

class AnimationUtils {
    static createObserver(callback, options = CONFIG.animation) {
        return new IntersectionObserver(callback, options);
    }

    static animateOnScroll(elements) {
        const observer = this.createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ===== COMPONENT CLASSES =====
class SearchComponent {
    constructor() {
        this.elements = this.initializeElements();
        this.timeout = null;
        this.init();
    }

    initializeElements() {
        return {
            toggleMobile: document.getElementById('search-toggle-mobile'),
            toggleDesktop: document.getElementById('search-toggle-desktop'),
            close: document.getElementById('close-search'),
            popup: document.getElementById('search-popup'),
            overlay: document.getElementById('search-overlay'),
            input: document.getElementById('search-input'),
            results: document.getElementById('search-results'),
            empty: document.getElementById('search-empty'),
            loading: document.getElementById('search-loading'),
            noResults: document.getElementById('search-no-results'),
            resultsContainer: document.getElementById('search-results-container'),
            template: document.getElementById('product-template')
        };
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const { toggleMobile, toggleDesktop, close, overlay, input } = this.elements;

        toggleMobile?.addEventListener('click', () => this.open());
        toggleDesktop?.addEventListener('click', () => this.open());
        close?.addEventListener('click', () => this.close());
        overlay?.addEventListener('click', () => this.close());
        
        input?.addEventListener('input', (e) => this.handleSearchInput(e));
    }

    open() {
        const { popup, overlay, input } = this.elements;
        DOMUtils.addClass(popup, 'open');
        DOMUtils.addClass(overlay, 'open');
        DOMUtils.toggleOverflow(true);
        
        setTimeout(() => input?.focus(), 300);
    }

    close() {
        const { popup, overlay, input } = this.elements;
        DOMUtils.removeClass(popup, 'open');
        DOMUtils.removeClass(overlay, 'open');
        DOMUtils.toggleOverflow(false);
        
        if (input) input.value = '';
        this.showEmptyState();
    }

    handleSearchInput(event) {
        clearTimeout(this.timeout);
        const query = event.target.value.trim();
        
        this.timeout = setTimeout(() => {
            this.performSearch(query);
        }, CONFIG.transitions.debounceDelay);
    }

    performSearch(query) {
        if (query.length < 2) {
            this.showEmptyState();
            return;
        }

        this.showLoading();

        setTimeout(() => {
            const filteredProducts = PRODUCTS.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            );

            this.showResults(filteredProducts);
        }, CONFIG.transitions.searchDelay);
    }

    showEmptyState() {
        const { empty, loading, noResults, resultsContainer } = this.elements;
        DOMUtils.showElement(empty);
        DOMUtils.hideElement(loading);
        DOMUtils.hideElement(noResults);
        DOMUtils.hideElement(resultsContainer);
    }

    showLoading() {
        const { empty, loading, noResults, resultsContainer } = this.elements;
        DOMUtils.hideElement(empty);
        DOMUtils.showElement(loading);
        DOMUtils.hideElement(noResults);
        DOMUtils.hideElement(resultsContainer);
    }

    showResults(filteredProducts) {
        const { empty, loading, noResults, resultsContainer, template } = this.elements;
        
        DOMUtils.hideElement(empty);
        DOMUtils.hideElement(loading);

        if (filteredProducts.length === 0) {
            DOMUtils.showElement(noResults);
            DOMUtils.hideElement(resultsContainer);
        } else {
            DOMUtils.hideElement(noResults);
            DOMUtils.showElement(resultsContainer);
            
            this.renderResults(filteredProducts, template, resultsContainer);
        }
    }

    renderResults(products, template, container) {
        container.innerHTML = '';

        products.forEach(product => {
            const productElement = template.content.cloneNode(true);
            
            // Set product data
            const img = productElement.querySelector('img');
            const name = productElement.querySelector('h3');
            const desc = productElement.querySelector('p');
            const price = productElement.querySelector('.font-bold');
            
            if (img) img.src = product.image;
            if (img) img.alt = product.name;
            if (name) name.textContent = product.name;
            if (desc) desc.textContent = product.description;
            if (price) price.textContent = product.price;
            
            // Add to cart functionality
            const addToCartBtn = productElement.querySelector('button');
            addToCartBtn?.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleAddToCart(addToCartBtn, product.name);
            });

            container.appendChild(productElement);
        });
    }

    handleAddToCart(button, productName) {
        const icon = button.querySelector('i');
        const originalClass = icon?.className;
        const originalText = button.querySelector('span')?.textContent;

        // Update button state
        if (icon) icon.className = 'fas fa-check';
        if (button.querySelector('span')) button.querySelector('span').textContent = 'Ditambahkan!';
        button.style.backgroundColor = CONFIG.colors.success;

        // Reset button state
        setTimeout(() => {
            if (icon) icon.className = originalClass;
            if (button.querySelector('span')) button.querySelector('span').textContent = originalText;
            button.style.backgroundColor = CONFIG.colors.primaryOrange;
        }, CONFIG.transitions.animationDelay);

        alert(`Produk ${productName} berhasil ditambahkan ke keranjang!`);
    }
}

class SidebarComponent {
    constructor(menuToggleId, closeId, sidebarId, overlayId) {
        this.menuToggle = document.getElementById(menuToggleId);
        this.close = document.getElementById(closeId);
        this.sidebar = document.getElementById(sidebarId);
        this.overlay = document.getElementById(overlayId);
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.menuToggle?.addEventListener('click', () => this.open());
        this.close?.addEventListener('click', () => this.close());
        this.overlay?.addEventListener('click', () => this.close());
    }

    open() {
        DOMUtils.addClass(this.sidebar, 'open');
        DOMUtils.addClass(this.overlay, 'open');
        DOMUtils.toggleOverflow(true);
    }

    close() {
        DOMUtils.removeClass(this.sidebar, 'open');
        DOMUtils.removeClass(this.overlay, 'open');
        DOMUtils.toggleOverflow(false);
    }
}

class ProductComponent {
    static initHoverEffect() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            });
        });
    }

    static initAddToCart() {
        const addToCartButtons = document.querySelectorAll('.btn-block');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const icon = this.querySelector('i');
                const originalClass = icon?.className;
                const originalText = this.querySelector('span')?.textContent;
                
                // Update button state
                if (icon) icon.className = 'fas fa-check';
                if (this.querySelector('span')) this.querySelector('span').textContent = 'Ditambahkan!';
                this.style.backgroundColor = CONFIG.colors.success;
                
                // Reset button state
                setTimeout(() => {
                    if (icon) icon.className = originalClass;
                    if (this.querySelector('span')) this.querySelector('span').textContent = originalText;
                    this.style.backgroundColor = CONFIG.colors.primaryOrange;
                }, CONFIG.transitions.animationDelay);
                
                alert('Produk berhasil ditambahkan ke keranjang!');
            });
        });
    }

    static initWishlist() {
        const wishlistButtons = document.querySelectorAll('.fa-heart');
        
        wishlistButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (this.classList.contains('far')) {
                    this.classList.remove('far');
                    this.classList.add('fas', 'text-primary-red');
                    alert('Produk ditambahkan ke wishlist!');
                } else {
                    this.classList.remove('fas', 'text-primary-red');
                    this.classList.add('far');
                    alert('Produk dihapus dari wishlist!');
                }
            });
        });
    }

    static initSkinTypeButtons() {
        const skinTypeButtons = document.querySelectorAll('.skin-type-btn');
        const skinContents = document.querySelectorAll('.skin-content');

        skinTypeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Reset all buttons
                skinTypeButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.style.borderColor = '';
                });

                // Activate clicked button
                this.classList.add('active');
                this.style.backgroundColor = CONFIG.colors.primaryOrange;
                this.style.color = 'white';
                this.style.borderColor = CONFIG.colors.primaryOrange;

                // Show corresponding content
                const skinType = this.getAttribute('data-type');
                skinContents.forEach(content => DOMUtils.hideElement(content));
                
                const targetContent = document.getElementById(`skin-${skinType}`);
                if (targetContent) DOMUtils.showElement(targetContent);
            });
        });

        // Set default active state
        const defaultButton = document.querySelector('.skin-type-btn.active');
        if (defaultButton) {
            defaultButton.style.backgroundColor = CONFIG.colors.primaryOrange;
            defaultButton.style.color = 'white';
            defaultButton.style.borderColor = CONFIG.colors.primaryOrange;
        }
    }

    static initImageGallery() {
        const mainProductImage = document.getElementById('main-product-image');
        const productThumbnails = document.querySelectorAll('.product-thumbnail');
        
        productThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                productThumbnails.forEach(t => {
                    DOMUtils.removeClass(t, 'active');
                    DOMUtils.removeClass(t, 'border-primary-orange');
                    DOMUtils.addClass(t, 'border-transparent');
                });
                
                // Add active class to clicked thumbnail
                DOMUtils.addClass(this, 'active');
                DOMUtils.addClass(this, 'border-primary-orange');
                DOMUtils.removeClass(this, 'border-transparent');
                
                // Change main image
                const imgSrc = this.querySelector('img').src;
                if (mainProductImage) mainProductImage.src = imgSrc;
            });
        });
    }

    static initQuantitySelector() {
        const decreaseQty = document.getElementById('decrease-qty');
        const increaseQty = document.getElementById('increase-qty');
        const quantityInput = document.getElementById('quantity');
        
        decreaseQty?.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
        increaseQty?.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });
    }

    static initTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => {
                    DOMUtils.removeClass(btn, 'active');
                    DOMUtils.removeClass(btn, 'text-primary-orange');
                    DOMUtils.removeClass(btn, 'border-primary-orange');
                });
                
                tabContents.forEach(content => {
                    DOMUtils.removeClass(content, 'active');
                });
                
                // Add active class to clicked button and corresponding content
                DOMUtils.addClass(this, 'active');
                DOMUtils.addClass(this, 'text-primary-orange');
                DOMUtils.addClass(this, 'border-primary-orange');
                
                const targetContent = document.getElementById(tabId);
                if (targetContent) DOMUtils.addClass(targetContent, 'active');
            });
        });
    }
}

class AuthComponent {
    constructor() {
        this.isLoggedIn = false;
        this.loginButton = document.querySelector('.bottom-nav a:nth-child(4)');
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.loginButton?.addEventListener('click', (e) => this.handleLogin(e));
    }

    handleLogin(e) {
        e.preventDefault();
        this.isLoggedIn = !this.isLoggedIn;
        
        if (this.isLoggedIn) {
            this.loginButton.innerHTML = '<i class="fas fa-user text-2xl mb-1"></i><span class="text-xs font-medium">Profil</span>';
            DOMUtils.addClass(this.loginButton, 'logged-in');
        } else {
            this.loginButton.innerHTML = '<i class="fas fa-user text-2xl mb-1"></i><span class="text-xs font-medium">Masuk</span>';
            DOMUtils.removeClass(this.loginButton, 'logged-in');
        }
    }
}

class FormComponent {
    static initNewsletter() {
        const newsletterForm = document.querySelector('section.bg-primary-orange form');
        
        newsletterForm?.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                alert('Terima kasih! Anda telah berlangganan newsletter kami.');
                emailInput.value = '';
            } else {
                alert('Silakan masukkan alamat email yang valid.');
            }
        });
    }
}

class NavigationComponent {
    static initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    static initCart() {
        const cartButton = document.querySelector('button .fa-shopping-cart')?.closest('button');
        
        cartButton?.addEventListener('click', function() {
            alert('Menuju ke keranjang belanja...');
        });
    }
}

// ===== MAIN APPLICATION =====
class IncliniqueApp {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        this.initializeComponents();
        this.bindGlobalEvents();
        this.addResizeAnimationStopper();
    }

    initializeComponents() {
        // Initialize all components
        this.components.search = new SearchComponent();
        this.components.sidebar = new SidebarComponent('menu-toggle', 'close-sidebar', 'sidebar', 'sidebar-overlay');
        this.components.filterSidebar = new SidebarComponent('filter-toggle', 'close-filter', 'filter-sidebar', 'filter-overlay');
        this.components.auth = new AuthComponent();

        // Initialize utility components
        ProductComponent.initHoverEffect();
        ProductComponent.initAddToCart();
        ProductComponent.initWishlist();
        ProductComponent.initSkinTypeButtons();
        ProductComponent.initImageGallery();
        ProductComponent.initQuantitySelector();
        ProductComponent.initTabs();
        
        FormComponent.initNewsletter();
        NavigationComponent.initSmoothScroll();
        NavigationComponent.initCart();

        // Initialize animations
        AnimationUtils.animateOnScroll(document.querySelectorAll('.product-card, .skin-content > div'));
    }

    bindGlobalEvents() {
        // Window resize handler
        let resizeTimer;
        window.addEventListener('resize', () => {
            document.body.classList.add('resize-animation-stopper');
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                document.body.classList.remove('resize-animation-stopper');
            }, CONFIG.transitions.resizeDelay);
        });
    }

    addResizeAnimationStopper() {
        DOMUtils.createStyle(`
            .resize-animation-stopper * {
                animation: none !important;
                transition: none !important;
            }
        `);
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    new IncliniqueApp();
});