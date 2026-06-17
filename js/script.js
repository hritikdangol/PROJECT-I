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

function showPage(page) {
    alert(page);
}

function goBack() {
    if (document.referrer !== "") {
        window.history.back();
    } else {
        window.location.href = "/PROJECT-I/index.html";
    }
}
