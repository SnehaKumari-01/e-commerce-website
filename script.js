// Enhanced E-commerce Application
class ECommerceApp {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "AirPods 4 with Active Noise Cancellation",
                price: 17900.00,
                originalPrice: 25900,
                imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96cUNGMHVRUVpqOEFiUFU4R0xNRVFxdkhJa2hkRmxkTlJIMk9SdFNSaWFNODE1UUxLT2t0cW42N3FvQzVqaGhrVVcvdmFyQU52eG9rbk9Lb1pmQWN1MGgrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
                category: "audio",
                rating: 4.8,
                reviews: 1247,
                description: "Experience premium sound quality with our flagship wireless headphones featuring active noise cancellation, 40-hour battery life, and premium materials.",
                features: ["Active Noise Cancellation", "40-hour Battery Life", "Premium Materials", "Wireless Charging Case", "Hi-Res Audio Support"],
                inStock: true,
                badge: "Best Seller"
            },
            {
                id: 2,
                name: "Noise Pro 6 Smart Watch with 4.6 cm AMOLED Display",
                price: 5999.99,
                originalPrice: 8999.00,
                imageUrl: "https://m.media-amazon.com/images/I/81KD0A5sZnL.jpg",
                category: "wearables",
                rating: 4.6,
                reviews: 892,
                description: "Advanced smartwatch with comprehensive health monitoring, GPS tracking, and seamless smartphone integration for the modern lifestyle.",
                features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day Battery", "Health Analytics"],
                inStock: true,
                badge: "New"
            },
            {
                id: 3,
                name: "MacBook Pro M2",
                price: 199999.99,
                originalPrice: 229999.99,
                imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
                category: "computers",
                rating: 4.9,
                reviews: 2156,
                description: "High-performance laptop with M2 chip, 16GB unified memory, and 512GB SSD storage. Perfect for professionals and creators.",
                features: ["M2 Chip", "16GB Unified Memory", "512GB SSD", "Retina Display", "All-day Battery"],
                inStock: true,
                badge: "Pro"
            },
            {
                id: 4,
                name: "Apple iPhone 15 Pro Max (Black Titanium, 256 GB)",
                price: 114900.00,
                originalPrice: 134900.00,
                imageUrl: "https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg",
                category: "mobile",
                rating: 4.7,
                reviews: 3421,
                description: "Latest iPhone with advanced camera system, A17 Pro chip, and titanium design. Capture life in stunning detail.",
                features: ["A17 Pro Chip", "Pro Camera System", "Titanium Design", "USB-C", "Action Button"],
                inStock: true,
                badge: "Latest"
            },
            {
                id: 5,
                name: "Sony PlayStation5 Gaming Console (Slim)",
                price: 54900.99,
                originalPrice: 59900.99,
                imageUrl: "https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg",
                category: "gaming",
                rating: 4.8,
                reviews: 1876,
                description: "Next-generation gaming console with 4K gaming, ray tracing, and exclusive game library. Experience gaming like never before.",
                features: ["4K Gaming", "Ray Tracing", "SSD Storage", "DualSense Controller", "Exclusive Games"],
                inStock: false,
                badge: "Out of Stock"
            },
            {
                id: 6,
                name: "iPhone 16 Pro Max 256 GB",
                price: 134900.99,
                originalPrice: 144900.99,
                imageUrl: "https://m.media-amazon.com/images/I/619oqSJVY5L._SX679_.jpg",
                category: "mobile",
                rating: 4.5,
                reviews: 1234,
                description: "Versatile tablet perfect for work and entertainment with M2 chip, stunning Liquid Retina display, and all-day battery.",
                features: ["M2 Chip", "Liquid Retina Display", "All-day Battery", "Apple Pencil Support", "Magic Keyboard Compatible"],
                inStock: true,
                badge: "Popular"
            },
            {
                id: 7,
                name: "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)",
                price: 22900.99,
                originalPrice: 24900.00,
                imageUrl: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
                category: "audio",
                rating: 4.6,
                reviews: 2341,
                description: "Premium wireless earbuds with adaptive transparency, personalized spatial audio, and up to 6 hours of listening time.",
                features: ["Adaptive Transparency", "Spatial Audio", "6-hour Battery", "MagSafe Charging", "Sweat Resistant"],
                inStock: true,
                badge: "Trending"
            },
            {
                id: 8,
                name: "Lancemates Wireless Mechanical Keyboard Kit",
                price: 102133.99,
                originalPrice: 204226.99,
                imageUrl: "https://m.media-amazon.com/images/I/41jaiEwRQ3L._SX300_SY300_QL70_FMwebp_.jpg",
                category: "gaming",
                rating: 4.4,
                reviews: 567,
                description: "Professional gaming keyboard with mechanical switches, RGB backlighting, and programmable keys for competitive gaming.",
                features: ["Mechanical Switches", "RGB Backlighting", "Programmable Keys", "Gaming Mode", "USB-C Connection"],
                inStock: true,
                badge: "Gaming"
            }
        ];

        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.currentProduct = null;
        this.currentSlide = 0;
        this.displayedProducts = 6;
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.currentSort = 'default';

        this.init();
    }

    init() {
        this.hideLoadingScreen();
        this.setupEventListeners();
        this.loadProducts();
        this.updateCartCount();
        this.updateWishlistCount();
        this.startHeroCarousel();
        this.setupScrollEffects();
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 1500);
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('focus', () => this.showSearchSuggestions());
            searchInput.addEventListener('blur', () => {
                setTimeout(() => this.hideSearchSuggestions(), 200);
            });
        }

        // Category filters
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterByCategory(e.target.dataset.category));
        });

        // Sort functionality
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => this.sortProducts(e.target.value));
        }

        // Checkout form
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => this.handleCheckout(e));
        }

        // Newsletter form
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('newsletter-form')) {
                this.subscribeNewsletter(e);
            }
        });

        // Close modals on outside click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        // Scroll to top on page change
        window.addEventListener('scroll', () => this.handleScroll());
    }

    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    handleScroll() {
        // Add scroll-based animations here
        const elements = document.querySelectorAll('.product-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Hero Carousel
    startHeroCarousel() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    goToSlide(slideIndex) {
        const slides = document.querySelectorAll('.hero-slide');
        const indicators = document.querySelectorAll('.indicator');

        slides[this.currentSlide].classList.remove('active');
        indicators[this.currentSlide].classList.remove('active');

        this.currentSlide = slideIndex;

        slides[this.currentSlide].classList.add('active');
        indicators[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % 3;
        this.goToSlide(nextIndex);
    }

    // Search functionality
    handleSearch(query) {
        const suggestions = document.getElementById('searchSuggestions');

        if (query.length === 0) {
            this.hideSearchSuggestions();
            this.filteredProducts = [...this.products];
            this.loadProducts();
            return;
        }

        // Filter products based on search query
        this.filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        // Show search suggestions
        if (query.length > 0) {
            const suggestionItems = this.filteredProducts.slice(0, 5).map(product =>
                `<div class="search-suggestion" onclick="app.selectSearchSuggestion('${product.name}')">
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        <img src="${product.imageUrl}" alt="${product.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;" />
                        <span>${product.name}</span>
                    </div>
                </div>`
            ).join('');

            suggestions.innerHTML = suggestionItems;
            suggestions.style.display = 'block';
        }

        this.loadProducts();
    }

    showSearchSuggestions() {
        const suggestions = document.getElementById('searchSuggestions');
        const query = document.getElementById('searchInput').value;
        if (query.length > 0) {
            suggestions.style.display = 'block';
        }
    }

    hideSearchSuggestions() {
        const suggestions = document.getElementById('searchSuggestions');
        suggestions.style.display = 'none';
    }

    selectSearchSuggestion(productName) {
        document.getElementById('searchInput').value = productName;
        this.hideSearchSuggestions();
        this.handleSearch(productName);
    }

    // Product filtering and sorting
    filterByCategory(category) {
        this.currentCategory = category;

        // Update active button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.querySelector(`[data-category="${category}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Filter products
        if (category === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => product.category === category);
        }

        this.displayedProducts = 6;
        this.loadProducts();
    }

    sortProducts(sortType = null) {
        if (sortType) {
            this.currentSort = sortType;
        }

        switch (this.currentSort) {
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'rating':
                this.filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                this.filteredProducts = this.products.filter(product =>
                    this.currentCategory === 'all' || product.category === this.currentCategory
                );
        }

        this.loadProducts();
    }

    // Product loading and display
    loadProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        const productsToShow = this.filteredProducts.slice(0, this.displayedProducts);

        productsGrid.innerHTML = productsToShow.map(product => this.createProductCard(product)).join('');

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (this.displayedProducts >= this.filteredProducts.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }

        // Add scroll animations
        this.addScrollAnimations();
        // Update wishlist icons after render
        this.updateWishlistIcons();
    }

    createProductCard(product) {
        const isInWishlist = this.wishlist.some(item => item.id === product.id);
        const discountPercent = product.originalPrice ?
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-img" style="width:100%;height:220px;object-fit:cover;border-radius:8px;" />
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    ${discountPercent > 0 ? `<div class="product-badge" style="background: var(--success-color); top: 3rem;">-${discountPercent}%</div>` : ''}
                    <div class="product-actions">
                        <button class="action-btn" onclick="app.toggleWishlistItem(${product.id})" title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                            <i class="fas fa-heart ${isInWishlist ? 'text-red' : ''}"></i>
                        </button>
                        <button class="action-btn" onclick="app.quickView(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn" onclick="app.showProductDetail(${product.id})" title="View Details">
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-rating">
                        ${this.generateStars(product.rating)}
                        <span class="rating-text">(${product.reviews})</span>
                    </div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">
                        ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toFixed(2)}</span>` : ''}
                        ₹${product.price.toFixed(2)}
                    </div>
                    <button class="add-to-cart-btn" onclick="app.addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt star"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star star empty"></i>';
        }
        return stars;
    }

    addScrollAnimations() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.5s ease';
            card.style.transitionDelay = `${index * 0.1}s`;

            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    loadMoreProducts() {
        this.displayedProducts += 6;
        this.loadProducts();
    }

    // Product detail functionality
    showProductDetail(productId) {
        this.currentProduct = this.products.find(p => p.id === productId);
        if (!this.currentProduct) return;

        const productDetail = document.getElementById('productDetail');
        const breadcrumb = document.getElementById('productBreadcrumb');

        if (breadcrumb) {
            breadcrumb.textContent = this.currentProduct.name;
        }

        if (productDetail) {
            productDetail.innerHTML = this.createProductDetailHTML();
        }

        this.loadRelatedProducts();
        this.showPage('product');
    }

    createProductDetailHTML() {
        const isInWishlist = this.wishlist.some(item => item.id === this.currentProduct.id);

        return `
            <div class="product-detail-image">
                <img src="${this.currentProduct.imageUrl}" alt="${this.currentProduct.name}" style="width:100%;height:360px;object-fit:cover;border-radius:8px;" />
                <div class="product-gallery" style="display:flex;gap:0.5rem;margin-top:0.75rem;">
                    <div class="gallery-thumb active"><img src="${this.currentProduct.imageUrl}" alt="${this.currentProduct.name}" style="width:72px;height:72px;object-fit:cover;border-radius:6px;" /></div>
                    <div class="gallery-thumb"><img src="${this.currentProduct.imageUrl}" alt="${this.currentProduct.name}" style="width:72px;height:72px;object-fit:cover;border-radius:6px;" /></div>
                    <div class="gallery-thumb"><img src="${this.currentProduct.imageUrl}" alt="${this.currentProduct.name}" style="width:72px;height:72px;object-fit:cover;border-radius:6px;" /></div>
                </div>
            </div>
            <div class="product-info">
                <h1>${this.currentProduct.name}</h1>
                <div class="product-rating-detail">
                    <div class="rating-stars">
                        ${this.generateStars(this.currentProduct.rating)}
                    </div>
                    <span class="rating-text">${this.currentProduct.rating} (${this.currentProduct.reviews} reviews)</span>
                </div>
                <p class="product-description">${this.currentProduct.description}</p>
                <div class="product-detail-price">
                    ${this.currentProduct.originalPrice ? `<span class="price-original">₹${this.currentProduct.originalPrice.toFixed(2)}</span>` : ''}
                    ₹${this.currentProduct.price.toFixed(2)}
                </div>
                
                <div class="product-options">
                    <div class="option-group">
                        <label>Color:</label>
                        <div class="option-buttons">
                            <button class="option-btn active">Space Gray</button>
                            <button class="option-btn">Silver</button>
                            <button class="option-btn">Gold</button>
                        </div>
                    </div>
                    <div class="option-group">
                        <label>Storage:</label>
                        <div class="option-buttons">
                            <button class="option-btn active">128GB</button>
                            <button class="option-btn">256GB</button>
                            <button class="option-btn">512GB</button>
                        </div>
                    </div>
                </div>

                <div class="quantity-selector">
                    <span class="quantity-label">Quantity:</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="app.changeQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" id="productQuantity" value="1" min="1" max="10">
                        <button class="quantity-btn" onclick="app.changeQuantity(1)">+</button>
                    </div>
                </div>

                <div class="product-actions-detail">
                    <button class="btn-primary" onclick="app.addToCartWithQuantity()" ${!this.currentProduct.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        ${this.currentProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button class="btn-secondary" onclick="app.toggleWishlistItem(${this.currentProduct.id})">
                        <i class="fas fa-heart ${isInWishlist ? 'text-red' : ''}"></i>
                    </button>
                </div>

                <ul class="product-features">
                    ${this.currentProduct.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    loadRelatedProducts() {
        const relatedGrid = document.getElementById('relatedGrid');
        if (!relatedGrid) return;

        const related = this.products
            .filter(p => p.category === this.currentProduct.category && p.id !== this.currentProduct.id)
            .slice(0, 4);

        relatedGrid.innerHTML = related.map(product => this.createProductCard(product)).join('');
    }

    changeQuantity(change) {
        const quantityInput = document.getElementById('productQuantity');
        if (!quantityInput) return;

        let newQuantity = parseInt(quantityInput.value) + change;
        if (newQuantity < 1) newQuantity = 1;
        if (newQuantity > 10) newQuantity = 10;
        quantityInput.value = newQuantity;
    }

    // Quick view functionality
    quickView(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const quickViewContent = document.getElementById('quickViewContent');
        quickViewContent.innerHTML = `
            <div class="product-detail" style="display:flex;gap:1rem;">
                <div class="product-detail-image" style="height:300px;flex:0 0 40%;">
                    <img src="${product.imageUrl}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />
                </div>
                <div class="product-info" style="flex:1;">
                    <h2>${product.name}</h2>
                    <div class="product-rating-detail">
                        ${this.generateStars(product.rating)}
                        <span class="rating-text">(${product.reviews})</span>
                    </div>
                    <p>${product.description}</p>
                    <div class="product-detail-price">₹${product.price.toFixed(2)}</div>
                    <div class="product-actions-detail" style="margin-top:0.75rem;">
                        <button class="btn-primary" onclick="app.addToCart(${product.id}); app.closeQuickView();">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn-secondary" onclick="app.showProductDetail(${product.id}); app.closeQuickView();">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.showModal('quickViewModal');
    }

    closeQuickView() {
        this.closeModal('quickViewModal');
    }

    // Cart functionality
    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showToast('Product added to cart!', 'success');

        // Add visual feedback
        this.addCartAnimation(productId);
    }

    addToCartWithQuantity() {
        const quantity = parseInt(document.getElementById('productQuantity')?.value || 1);
        if (this.currentProduct) this.addToCart(this.currentProduct.id, quantity);
    }

    addCartAnimation(productId) {
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        if (productCard) {
            productCard.style.transform = 'scale(0.95)';
            setTimeout(() => {
                productCard.style.transform = 'scale(1)';
            }, 200);
        }
    }

    updateCartQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                this.updateCartDisplay();
                this.updateCartCount();
            }
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.updateCartCount();
        this.showToast('Item removed from cart', 'warning');
    }

    updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');

        if (!cartItems) return;

        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h2>Your cart is empty</h2>
                    <p>Add some products to get started!</p>
                    <button class="primary-btn" onclick="app.showPage('home')">
                        <i class="fas fa-shopping-bag"></i> Continue Shopping
                    </button>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item" style="display:flex;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(0,0,0,0.06);">
                <div class="cart-item-image" style="flex:0 0 100px;">
                    <img src="${item.imageUrl}" alt="${item.name}" class="cart-img" style="width:100px;height:100px;object-fit:cover;border-radius:8px;" />
                </div>
                <div class="cart-item-info" style="flex:1;">
                    <h3 style="margin:0 0 0.25rem 0;">${item.name}</h3>
                    <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-quantity" style="display:flex;align-items:center;gap:0.5rem;">
                    <button onclick="app.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="app.updateCartQuantity(${item.id}, parseInt(this.value))" style="width:56px;text-align:center;">
                    <button onclick="app.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-total" style="min-width:90px;text-align:right;">₹${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-btn" onclick="app.removeFromCart(${item.id})" style="margin-left:0.5rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        this.updateCartSummary();
        if (cartSummary) cartSummary.style.display = 'block';
    }

    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.08; // 8% tax
        const shipping = subtotal > 100 ? 0 : 15; // Free shipping over ₹100
        const total = subtotal + tax + shipping;

        const elements = {
            subtotalAmount: document.getElementById('subtotalAmount'),
            taxAmount: document.getElementById('taxAmount'),
            shippingAmount: document.getElementById('shippingAmount'),
            totalAmount: document.getElementById('totalAmount'),
            checkoutTotal: document.getElementById('checkoutTotal'),
            finalTotal: document.getElementById('finalTotal')
        };

        Object.entries(elements).forEach(([key, element]) => {
            if (element) {
                switch (key) {
                    case 'subtotalAmount':
                        element.textContent = `₹${subtotal.toFixed(2)}`;
                        break;
                    case 'taxAmount':
                        element.textContent = `₹${tax.toFixed(2)}`;
                        break;
                    case 'shippingAmount':
                        element.textContent = shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`;
                        break;
                    case 'totalAmount':
                    case 'checkoutTotal':
                    case 'finalTotal':
                        element.textContent = `₹${total.toFixed(2)}`;
                        break;
                }
            }
        });

        this.updateCheckoutItems();
    }

    updateCheckoutItems() {
        const checkoutItems = document.getElementById('checkoutItems');
        if (!checkoutItems) return;

        checkoutItems.innerHTML = this.cart.map(item => `
            <div class="checkout-item" style="display:flex;justify-content:space-between;padding:0.5rem 0;">
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = count;
            if (count > 0) {
                cartCount.style.display = 'flex';
            } else {
                cartCount.style.display = 'none';
            }
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Wishlist functionality
    toggleWishlistItem(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingIndex = this.wishlist.findIndex(item => item.id === productId);

        if (existingIndex > -1) {
            this.wishlist.splice(existingIndex, 1);
            this.showToast('Removed from wishlist', 'warning');
        } else {
            this.wishlist.push({
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl
            });
            this.showToast('Added to wishlist!', 'success');
        }

        this.saveWishlist();
        this.updateWishlistCount();
        this.updateWishlistDisplay();

        // Update heart icons
        this.updateWishlistIcons();
    }

    updateWishlistIcons() {
        document.querySelectorAll('.fa-heart').forEach(heart => {
            const productCard = heart.closest('[data-product-id]');
            if (productCard) {
                const productId = parseInt(productCard.dataset.productId);
                const isInWishlist = this.wishlist.some(item => item.id === productId);

                if (isInWishlist) {
                    heart.style.color = '#ff4757';
                } else {
                    heart.style.color = '';
                }
            }
        });
    }

    toggleWishlist() {
        this.updateWishlistDisplay();
        this.toggleModal('wishlistModal');
    }

    updateWishlistDisplay() {
        const wishlistItems = document.getElementById('wishlistItems');
        if (!wishlistItems) return;

        if (this.wishlist.length === 0) {
            wishlistItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-heart"></i>
                    <h3>Your wishlist is empty</h3>
                    <p>Add products you love to your wishlist!</p>
                </div>
            `;
            return;
        }

        wishlistItems.innerHTML = this.wishlist.map(item => `
            <div class="wishlist-item" style="display:flex;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(0,0,0,0.06);">
                <div class="wishlist-image" style="flex:0 0 80px;">
                    <img src="${item.imageUrl}" alt="${item.name}" class="wishlist-img" style="width:80px;height:80px;object-fit:cover;border-radius:8px;" />
                </div>
                <div class="wishlist-info" style="flex:1;">
                    <h4 style="margin:0 0 0.25rem 0;">${item.name}</h4>
                    <div class="wishlist-price">₹${item.price.toFixed(2)}</div>
                </div>
                <div class="wishlist-actions" style="display:flex;flex-direction:column;gap:0.5rem;">
                    <button class="wishlist-btn" onclick="app.addToCart(${item.id}); app.showToast('Added to cart!', 'success');">
                        Add to Cart
                    </button>
                    <button class="wishlist-btn remove" onclick="app.toggleWishlistItem(${item.id})">
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateWishlistCount() {
        const count = this.wishlist.length;
        const wishlistCount = document.getElementById('wishlistCount');
        if (wishlistCount) {
            wishlistCount.textContent = count;
            if (count > 0) {
                wishlistCount.style.display = 'flex';
            } else {
                wishlistCount.style.display = 'none';
            }
        }
    }

    saveWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }

    // Promo code functionality
    applyPromoCode() {
        const promoInput = document.getElementById('promoInput');
        if (!promoInput) return;

        const code = promoInput.value.trim().toUpperCase();
        const validCodes = {
            'SAVE10': 0.1,
            'WELCOME20': 0.2,
            'STUDENT15': 0.15
        };

        if (validCodes[code]) {
            const discount = validCodes[code];
            this.showToast(`Promo code applied! ${Math.round(discount * 100)}% discount`, 'success');
            promoInput.value = '';
            // Apply discount logic here
        } else {
            this.showToast('Invalid promo code', 'error');
        }
    }

    // Checkout functionality
    handleCheckout(e) {
        e.preventDefault();

        // Simulate order processing
        const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
        const orderNumberEl = document.getElementById('orderNumber');
        if (orderNumberEl) orderNumberEl.textContent = orderNumber;

        // Show success message
        const checkoutFormEl = document.getElementById('checkoutForm');
        const checkoutSuccessEl = document.getElementById('checkoutSuccess');
        if (checkoutFormEl) checkoutFormEl.style.display = 'none';
        if (checkoutSuccessEl) checkoutSuccessEl.style.display = 'block';

        // Scroll to top
        window.scrollTo(0, 0);
    }

    resetCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
        const checkoutFormEl = document.getElementById('checkoutForm');
        const checkoutSuccessEl = document.getElementById('checkoutSuccess');
        if (checkoutFormEl) checkoutFormEl.style.display = 'block';
        if (checkoutSuccessEl) checkoutSuccessEl.style.display = 'none';
        if (checkoutFormEl) checkoutFormEl.reset && checkoutFormEl.reset();
    }

    // Newsletter functionality
    subscribeNewsletter(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        this.showToast('Thank you for subscribing!', 'success');
        e.target.reset();
    }

    // Navigation functionality
    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update displays based on page
        if (pageId === 'cart') {
            this.updateCartDisplay();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close any open modals
        this.closeAllModals();
    }

    scrollToProducts() {
        const productsSection = document.getElementById('productsSection');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Modal functionality
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            if (modal.classList.contains('active')) {
                this.closeModal(modalId);
            } else {
                this.showModal(modalId);
            }
        }
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }

    // User menu functionality
    toggleUserMenu() {
        const userMenu = document.getElementById('userMenu');
        if (userMenu) {
            userMenu.classList.toggle('active');
        }
    }

    // Toast notifications
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        const toastMessage = toast.querySelector('.toast-message');
        const toastIcon = toast.querySelector('.toast-icon');

        // Set message and type
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;

        // Set appropriate icon
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        toastIcon.className = `toast-icon ${icons[type] || icons.info}`;

        // Show toast
        toast.classList.add('show');

        // Auto hide after 3 seconds
        setTimeout(() => {
            this.hideToast();
        }, 3000);
    }

    hideToast() {
        const toast = document.getElementById('toast');
        if (toast) toast.classList.remove('show');
    }
}

// Initialize the application
const app = new ECommerceApp();

// Global functions for HTML onclick handlers
window.app = app;
// Expose necessary functions globally
window.showPage = (pageId) => app.showPage(pageId);
window.scrollToProducts = () => app.scrollToProducts();
window.goToSlide = (index) => app.goToSlide(index);
window.loadMoreProducts = () => app.loadMoreProducts();
window.subscribeNewsletter = (e) => app.subscribeNewsletter(e);
window.toggleWishlist = () => app.toggleWishlist();
window.toggleUserMenu = () => app.toggleUserMenu();
window.closeQuickView = () => app.closeQuickView();
window.hideToast = () => app.hideToast();
window.applyPromoCode = () => app.applyPromoCode();
window.resetCart = () => app.resetCart();