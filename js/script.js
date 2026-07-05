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
    localStorage.setItem("foodName", name);
    localStorage.setItem("foodPrice", price);
    if (window.location.pathname.includes("browsebox.html")) {
        window.location.href = "checkout.html";
    } else {
        window.location.href = "html/checkout.html";
    }
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