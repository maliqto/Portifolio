document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Dev", "Pentester", "Bughunter"];
    let roleIndex = 0;
    const roleElement = document.getElementById("role");

    function changeRole() {
        roleElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setInterval(changeRole, 2000);

    // Carousel functionality
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Infinite scrolling
    function scrollImages() {
        carouselInner.style.transition = 'transform 0.5s linear';
        carouselInner.style.transform = `translateX(-100%)`;

        setTimeout(() => {
            carouselInner.appendChild(carouselInner.firstElementChild);
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = 'translateX(0)';
        }, 500);
    }

    setInterval(scrollImages, 500); // Change interval to 0.5 second for faster scrolling

    // Expand project details on hover
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('expanded');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('expanded');
        });
    });
});