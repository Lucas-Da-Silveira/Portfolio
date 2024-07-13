window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let currentIndexProjet = 0;

function moveCarouselProjet(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const totalCards = document.querySelectorAll('.carousel-card').length;
    const cardWidth = document.querySelector('.carousel-card').clientWidth;

    currentIndexProjet += direction;
    if (currentIndexProjet < 0) {
        currentIndexProjet = totalCards - 1;
    } else if (currentIndexProjet >= totalCards - 1) {
        currentIndexProjet = 0;
    }

    const newTransform = -currentIndexProjet * cardWidth;
    carouselTrack.style.transform = `translateX(${newTransform}px)`;
}

let currentIndexAbout = 0;

function moveCarouselAbout(direction) {
    const carouselTrack = document.querySelector('.carousel-track-about');
    const totalCards = document.querySelectorAll('.carousel-card-about').length;
    const cardWidth = document.querySelector('.carousel-card-about').clientWidth;

    currentIndexAbout += direction;
    if (currentIndexAbout < 0) {
        currentIndexAbout = totalCards - 1;
    } else if (currentIndexAbout >= totalCards - 2) {
        currentIndexAbout = 0;
    }

    const newTransform = -currentIndexAbout * cardWidth;
    carouselTrack.style.transform = `translateX(${newTransform}px)`;
}

function startAutoRotate() {
    setInterval(() => {
        moveCarouselAbout(1);
    }, 2000);
}
window.addEventListener('load', startAutoRotate);