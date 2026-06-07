const basePath = "/PROJECT-I";

function goToLogin() {
    window.location.href = `${basePath}/html/login.html`;
}

function goToSignup() {
    window.location.href = `${basePath}/html/signup.html`;
}

function goToVolunteerLogin() {
    window.location.href = `${basePath}/html/volunteerlogin.html`;
}

function goToRestaurantLogin() {
    window.location.href = `${basePath}/html/restaurantlogin.html`;
}

function goToRestaurantSignup() {
    window.location.href = `${basePath}/html/restaurantsignup.html`;
}

function showPage(page) {
    alert(page);
}
