// Scroll Suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// Alternar o menu responsivo
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');

    // Impede a rolagem do corpo quando o menu está aberto
    if (navList.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // Desabilita a rolagem do corpo
    } else {
        document.body.style.overflow = ''; // Restaura a rolagem do corpo
    }
});

// Prevenir rolagem horizontal
window.addEventListener('touchmove', function(e) {
    if (navList.classList.contains('active')) {
        e.preventDefault(); // Impede a rolagem horizontal apenas se o menu estiver ativo
    }
}, { passive: false });


