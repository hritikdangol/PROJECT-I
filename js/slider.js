const slides = document.querySelectorAll(".slide");
const bgEmoji = document.querySelector(".bg-emoji");

let current = 0;
function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    bgEmoji.textContent = slides[index].dataset.emoji;
}

setInterval(() => {
    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}, 4000);
