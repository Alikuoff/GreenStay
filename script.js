// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Mobil menyu ochiq bo'lsa, uni yopish
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});

// High contrast mode toggle
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        alert('Xabaringiz muvaffaqiyatli yuborildi!');
        contactForm.reset();
    }
});

function validateForm() {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const subject = document.querySelector('select[name="subject"]');
    const message = document.querySelector('textarea[name="message"]');

    if (name.value.trim() === '') {
        alert('Iltimos, ismingizni kiriting');
        return false;
    }
    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        alert('Iltimos, to\'g\'ri elektron pochta manzilini kiriting');
        return false;
    }
    if (subject.value === '') {
        alert('Iltimos, mavzuni tanlang');
        return false;
    }
    if (message.value.trim() === '') {
        alert('Iltimos, xabaringizni kiriting');
        return false;
    }
    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

testimonialSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - testimonialSlider.offsetLeft;
    scrollLeft = testimonialSlider.scrollLeft;
});

testimonialSlider.addEventListener('mouseleave', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mouseup', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialSlider.scrollLeft = scrollLeft - walk;
});

// Intersection Observer for animations
const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// Google Maps integration
function initMap() {
    const location = { lat: 41.311081, lng: 69.240562 }; // Toshkent koordinatalari
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


