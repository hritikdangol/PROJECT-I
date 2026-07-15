function signup(event) {
    event.preventDefault();

    const fullname = document.getElementById("name").value;
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
        fullname,
        email,
        phone,
        password
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("User added successfully!");
    window.location.href = "login.html";
}