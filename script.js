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

// Carrossel de Imagens (se houver)
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

if (totalItems > 0) { // Verifica se existem itens no carrossel
    document.querySelector('#nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems; // Move para o próximo item
        updateCarousel();
    });

    document.querySelector('#prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move para o item anterior
        updateCarousel();
    });

    function updateCarousel() {
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`; // Atualiza a posição do carrossel
    }
}
