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

// Alternar o menu responsivo usando o Bootstrap
const navbarToggler = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
    if (navMenu.classList.contains('show')) {
        document.body.style.overflow = ''; // Restaura a rolagem do corpo
    } else {
        document.body.style.overflow = 'hidden'; // Desativa a rolagem quando o menu está aberto
    }
});

// Fechar o menu responsivo ao clicar em um item de navegação (opcional)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (navMenu.classList.contains('show')) {
            navbarToggler.click(); // Fecha o menu ao clicar em um item
        }
    });
});

// Prevenir rolagem horizontal
window.addEventListener('touchmove', function(e) {
    if (navMenu.classList.contains('show')) {
        e.preventDefault(); // Impede a rolagem horizontal quando o menu está aberto
    }
}, { passive: false });

// Impede a rolagem do corpo se o menu estiver ativo (para rolagem via mouse)
document.addEventListener('wheel', function(event) {
    if (navMenu.classList.contains('show')) {
        event.preventDefault(); // Impede a rolagem do corpo
    }
}, { passive: false });
