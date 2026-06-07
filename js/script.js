const BASE_PATH = "/PROJECT-I";

function goToLogin() {
    window.location.href = `${BASE_PATH}/html/login.html`;
}

function goToSignup() {
    window.location.href = `${BASE_PATH}/html/signup.html`;
}

function goToVolunteerLogin() {
    window.location.href = `${BASE_PATH}/html/volunteerlogin.html`;
}

function goToRestaurantLogin() {
    window.location.href = `${BASE_PATH}/html/restaurantlogin.html`;
}

function goToRestaurantSignup() {
    window.location.href = `${BASE_PATH}/html/restaurantsignup.html`;
}

function showPage(page) {
    alert(page);
}
