/**
 * ============================================================
 * HEADER & FOOTER – Defined in JavaScript
 * ============================================================
 */

const HEADER_HTML = `
<header class="header-area site-header">
    <div class="main-menu-area">
        <div class="menu-container-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-sm-4 col-7 logo-column">
                        <div class="site-branding">
                            <div class="logo-wrap">
                                <a href="index.html" class="custom-logo-link">
                                    <img src="https://tgmblawoffice.com/wp-content/uploads/2025/06/cropped-cropped-Logo-I-TGMB-04.png" alt="TGMB Law Office" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-10 col-sm-8 col-5 text-right">
                        <div class="header-nav-and-buttons td-header-cta-enable">
                            <nav id="site-navigation" class="main-navigation td-ul-style">
                                <div class="main-menu-container">
                                    <ul id="main-menu" class="menu">
                                        <li class="menu-item"><a href="index.html" data-page="home">HOME</a></li>
                                        <li class="menu-item"><a href="about.html" data-page="about">ABOUT US</a></li>
                                        <li class="menu-item"><a href="services.html" data-page="services">SERVICES</a></li>
                                    </ul>
                                </div>
                            </nav>

                            <div class="header-buttons-area text-right">
                                <div class="header-buttons-wrapper">
                                    <ul class="td-ul-style">
                                        <li class="header-cta-button">
                                            <a class="td_button td_header_cta" href="contact.html">CONTACT US</a>
                                        </li>
                                        <li class="mobile-menu-trigger" id="menuToggle">
                                            <span></span><span></span><span></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
    <div class="footer-widget-area">
        <div class="container">
            <div class="footer-row-enhanced">

                <!-- Column 1: Logo + Contact Info -->
                <div class="footer-col footer-brand">
                    <div class="about-info-img">
                        <img src="https://tgmblawoffice.com/wp-content/uploads/2025/06/cropped-cropped-Logo-I-TGMB-04.png" alt="TGMB" />
                    </div>
                    <div class="widget-contact-information">
                        <ul>
                            <li class="widget-mobile-number">
                                <i class="fas fa-phone-alt"></i>
                                <a href="tel:+251-115518484">+251-115518484</a>
                            </li>
                            <li class="widget-mail-address">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:info@tgmblawoffice.com">info@tgmblawoffice.com</a>
                            </li>
                            <li class="widget-address-desc">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="widget-addr-dsc">
                                    8th Floor, HMM Building<br />
                                    Bole Road, Wello Sefer<br />
                                    Addis Ababa, Ethiopia
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="footer-col footer-links">
                    <h4 style="font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-size: 1.1rem;">Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                    </ul>
                </div>

                <!-- Column 3: Gallery -->
                <div class="footer-col footer-gallery">
                    <div class="gallery-grid">
                        <a href="#" class="gallery-item"><img src="https://tgmblawoffice.com/wp-content/uploads/2025/04/9.jpg" alt="Gallery" /></a>
                        <a href="#" class="gallery-item"><img src="https://tgmblawoffice.com/wp-content/uploads/2025/04/8.jpg" alt="Gallery" /></a>
                        <a href="#" class="gallery-item"><img src="https://tgmblawoffice.com/wp-content/uploads/2025/04/7.jpg" alt="Gallery" /></a>
                        <a href="#" class="gallery-item"><img src="https://tgmblawoffice.com/wp-content/uploads/2025/04/6.jpg" alt="Gallery" /></a>
                        <a href="#" class="gallery-item"><img src="https://tgmblawoffice.com/wp-content/uploads/2025/04/5.jpg" alt="Gallery" /></a>
                        <a href="#" class="gallery-item"><img src="https://tgmblawoffice.com/wp-content/uploads/2025/04/4.jpg" alt="Gallery" /></a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-inner">
                <span>© TGMB 2025 | All Right Reserved</span>
                <span>Powered by <strong><a href="https://ahaz.io">Ahaz solutions</strong></a></span>
            </div>
        </div>
    </div>
</footer>
`;


/**
 * ============================================================
 * ALL FUNCTIONALITY – runs after DOM is ready
 * ============================================================
 */
document.addEventListener('DOMContentLoaded', function() {

    // ---------- 1. INJECT HEADER & FOOTER ----------
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = HEADER_HTML;
    }

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = FOOTER_HTML;
    }

    // ---------- 2. ACTIVE NAV LINK (by current page) ----------
    function setActiveNavByPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('#main-menu .menu-item a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Remove any existing active classes
            link.classList.remove('active');
            link.closest('.menu-item').classList.remove('current-menu-item');

            if (href === currentPage) {
                link.classList.add('active');
                link.closest('.menu-item').classList.add('current-menu-item');
            }
        });

        // Special case: root domain might not have a filename
        if (currentPage === '' || currentPage === 'index.html') {
            const homeLink = document.querySelector('#main-menu .menu-item a[href="index.html"]');
            if (homeLink) {
                homeLink.classList.add('active');
                homeLink.closest('.menu-item').classList.add('current-menu-item');
            }
        }
    }

    // Run after injection
    setActiveNavByPage();


    // ---------- 3. MOBILE MENU TOGGLE ----------
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-navigation ul');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('open');
            mainNav.classList.toggle('open');
        });

        // Close menu on link click (mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('open');
                    mainNav.classList.remove('open');
                }
            });
        });
    }


    // ---------- 4. ACTIVE NAV LINK ON SCROLL (for sections) ----------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-navigation ul li a');

    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                // Only match if the href points to a section on the same page
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }


    // ---------- 5. SMOOTH SCROLL FOR ANCHOR LINKS ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // ---------- 6. CONTACT FORM HANDLER (if a form exists) ----------
    const form = document.querySelector('form.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('#name')?.value?.trim();
            const email = this.querySelector('#email')?.value?.trim();
            const message = this.querySelector('#message')?.value?.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you! Your message has been sent. We\'ll get back to you shortly.');
                this.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
    

    console.log('TGMB Law Office – Header & Footer injected, all functionality ready.');
});