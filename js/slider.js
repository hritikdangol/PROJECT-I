const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

<<<<<<< HEAD
// Show the first slide
showSlide(current);

// Change slide every 4 seconds
=======
showSlide(current);

// slide change garxa
>>>>>>> a7d53d8ac9615b269cfecd0dabf752d72854998b
setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}, 4000);