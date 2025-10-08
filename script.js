// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-wrapper') && navLinks.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll for feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .value-card, .info-card, .install-card, .step-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add active class to current page in navigation
    const currentLocation = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
                body.style.overflow = '';
            }
        }, 250);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Copy code block on click
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.style.cursor = 'pointer';
        block.title = 'Click to copy';
        
        block.addEventListener('click', function() {
            const code = this.querySelector('code').textContent;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).then(() => {
                    const originalBg = this.style.backgroundColor;
                    this.style.backgroundColor = '#4CAF50';
                    
                    setTimeout(() => {
                        this.style.transition = 'background-color 0.3s ease';
                        this.style.backgroundColor = originalBg;
                    }, 200);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            }
        });
    });

    // Add scroll progress indicator
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.id = 'scroll-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(to right, #FF7757, #e66547);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            indicator.style.width = scrolled + '%';
        });
    };

    createScrollIndicator();

    // Add back to top button
    const createBackToTop = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.id = 'back-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: #FF7757;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(255, 119, 87, 0.3);
        `;
        document.body.appendChild(button);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.backgroundColor = '#e66547';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = '#FF7757';
        });
    };

    createBackToTop();
});
