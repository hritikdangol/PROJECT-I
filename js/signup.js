function register(event) {
    event.preventDefault();

    const role = document.getElementById("role").value;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    if (localStorage.getItem(email)) {
        alert("Account already exists with this email.");
        return;
    }
    const user = {
        role,
        fullname,
        email,
        phone,
        password
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
}