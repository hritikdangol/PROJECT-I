document.getElementById("foodName").innerHTML =
localStorage.getItem("foodName");

document.getElementById("foodPrice").innerHTML =
localStorage.getItem("foodPrice");

document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Booking Confirmed!\nThank you for choosing SaveBites.");
    localStorage.removeItem("foodName");
    localStorage.removeItem("foodPrice");
    window.location.href = "../index.html";
});