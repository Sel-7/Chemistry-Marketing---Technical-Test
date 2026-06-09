const carousel = document.querySelector('#carouselExampleIndicators');
const buttons = document.querySelectorAll('.d-carousel-btn');

carousel.addEventListener('slide.bs.carousel', event => {
    buttons.forEach(btn => {
        btn.classList.remove('carousel-active', 'blue', 'fw-bold');
    });

    buttons[event.to].classList.add('carousel-active', 'blue', 'fw-bold');
});
