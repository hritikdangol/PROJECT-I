function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUser = localStorage.getItem(email);

    if (storedUser === null) {
        alert("User not found. Please sign up first.");
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
        localStorage.setItem("currentUser", email);

        alert("Login successful!");

        window.location.href = "../index.html";
    } else {
        alert("Incorrect password.");
    }
}