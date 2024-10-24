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

// Adiciona o evento de clique para alternar a classe 'active' no menu
menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
});

// Carrossel de Imagens
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

document.querySelector('#nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems; // Move para o próximo item
    updateCarousel();
});

document.querySelector('#prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move para o item anterior
});

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`; // Atualiza a posição do carrossel
}
