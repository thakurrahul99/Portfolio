// Function to set the theme and update UI
function setTheme(theme) {
   document.body.setAttribute('data-bs-theme', theme);
   localStorage.setItem('theme', theme);
   var switchThemeBtn = document.getElementById('switchTheme');
   if (switchThemeBtn) {
       switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
   }}

   var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

// Event listener for the switch theme button
var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}


// Fixed Header & back to top button on Scroll
window.addEventListener('scroll', () => {
    // fixed header
    const header = document.getElementById('header');
    if (window.scrollY > 30 && !header.classList.contains('fixed-top')) {
        header.classList.add('fixed-top');
        document.getElementById('offcanvasNavbar').classList.add('fixedHeaderNavbar');
    } else if (window.scrollY <= 30 && header.classList.contains('fixed-top')) {
        header.classList.remove('fixed-top');
        document.getElementById('offcanvasNavbar').classList.remove('fixedHeaderNavbar');
    }

    // back to top
    const backToTopButton = document.getElementById('backToTopButton');
    if (backToTopButton) {
        if (window.scrollY > 400) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
             }
    }
});


// Jumping to top function
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Lightweight AOS-like scroll animations without external deps
(function enableScrollAnimations(){
    const elements = Array.from(document.querySelectorAll('[data-aos]'));
    if (!('IntersectionObserver' in window)) {
        // Fallback: show all elements if IntersectionObserver is not supported
        elements.forEach(el => el.classList.add('aos-animate'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            } else {
                entry.target.classList.remove('aos-animate');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

    elements.forEach(el => observer.observe(el));
})();