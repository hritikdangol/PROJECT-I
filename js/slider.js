const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

// Show the first slide
showSlide(current);

// Change slide every 4 seconds
setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}, 4000);