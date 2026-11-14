document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;

    let message = document.getElementById("message");

    if (name === "") {
        showMessage("Please enter your name.", "red");
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage("Please enter a valid email.", "red");
    }
    else if (password.length < 6) {
        showMessage("Password must be at least 6 characters.", "red");
    }
    else if (age === "" || Number(age) < 16) {
        showMessage("Please enter a valid age.", "red");
    }
    else if (gender === "") {
        showMessage("Please select your gender.", "red");
    }
    else if (course === "") {
        showMessage("Please select a course.", "red");
    }
    else {
        showMessage("Registration Successful!", "green");
        document.getElementById("registrationForm").reset();
    }
});

function showMessage(text, color) {
    let message = document.getElementById("message");
    message.textContent = text;
    message.style.color = color;
}