// Script para as galerias de projetos
const galleries = Array.from(document.querySelectorAll('.project-gallery'));

galleries.forEach((gallery) => {
    // Elementos da galeria
    const track = gallery.querySelector('.project-gallery-track');
    const slides = Array.from(gallery.querySelectorAll('.project-gallery-slide'));
    const prevButton = gallery.querySelector('.gallery-prev');
    const nextButton = gallery.querySelector('.gallery-next');
    const dots = Array.from(gallery.querySelectorAll('.gallery-dot'));
    let currentIndex = 0;

    // Função para atualizar a galeria
    const updateGallery = () => {
        if (!track || slides.length === 0) return;
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === currentIndex);
        });
    };

    // Função para ir para um slide
    const goToSlide = (index) => {
        if (slides.length === 0) return;
        currentIndex = (index + slides.length) % slides.length;
        updateGallery();
    };

    // Eventos dos botões
    prevButton?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton?.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Eventos dos dots
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => goToSlide(dotIndex));
    });

    // Atualizar no resize
    window.addEventListener('resize', updateGallery);
    updateGallery();
});
