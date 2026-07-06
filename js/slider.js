const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

showSlide(current);

// slide change garxa
setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}, 4000);
