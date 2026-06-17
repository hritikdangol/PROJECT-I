const BASE = "/PROJECT-I/";

function goToLogin() {
    window.location.href = BASE + "html/login.html";
}

function goToSignup() {
    window.location.href = BASE + "html/signup.html";
}

function goToVolunteerLogin() {
    window.location.href = BASE + "html/volunteerlogin.html";
}

function goToRestaurantLogin() {
    window.location.href = BASE + "html/restaurantlogin.html";
}

function goToRestaurantSignup() {
    window.location.href = BASE + "html/restaurantsignup.html";
}

function showPage(page) {
    alert(page);
}

function goBack() {
    window.location.href = BASE + "index.html";
}
