function goToLogin() {
    window.location.href = "/PROJECT-I/html/login.html";
}

function goToSignup() {
    window.location.href = "/PROJECT-I/html/signup.html";
}

function goToVolunteerLogin() {
    window.location.href = "/PROJECT-I/html/volunteerlogin.html";
}

function goToRestaurantLogin() {
    window.location.href = "/PROJECT-I/html/restaurantlogin.html";
}

function goToRestaurantSignup() {
    window.location.href = "/PROJECT-I/html/restaurantsignup.html";
}
function goBack() {
    if (document.referrer !== "") {
        history.back();
    } else {
        window.location.href = "index.html";
    }
}


/*checkout ko lagi*/
function bookNow(name, price) {

    const currentUser = localStorage.getItem("currentUser");

    if (currentUser === null) {
        alert("Please log in before booking a food box.");

        if (window.location.pathname.includes("browsebox.html")) {
            window.location.href = "login.html";
        } else {
            window.location.href = "html/login.html";
        }

        return;
    }

    localStorage.setItem("foodName", name);
    localStorage.setItem("foodPrice", price);

    if (window.location.pathname.includes("browsebox.html")) {
        window.location.href = "checkout.html";
    } else {
        window.location.href = "html/checkout.html";
    }
}




/*hamburger*/
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-right");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}




/*image slider yeta xa*/
const imgSlides = document.querySelectorAll(".imgSlide");

let currentImg = 0;

function imageSlider(){

    imgSlides[currentImg].classList.remove("activeImg");

    currentImg++;

    if(currentImg >= imgSlides.length){
        currentImg = 0;
    }

    imgSlides[currentImg].classList.add("activeImg");
}

setInterval(imageSlider, 3000);

// banner slider

document.addEventListener("DOMContentLoaded", function(){

    const banners = document.querySelectorAll(".banner");

    let current = 0;

    setInterval(() => {

        banners[current].classList.remove("active");

        current++;

        if(current >= banners.length){
            current = 0;
        }

        banners[current].classList.add("active");

    },4000);

});