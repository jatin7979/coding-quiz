function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Check if username and password are not empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required!";
    } else {
        // Check if username is "user" and password is "pass"
        if (username === "user" && password === "pass") {
            errorMessage.textContent = "Login successful!";
            errorMessage.style.color = "Blue";
            window.location.href = "front.html"
        } else {
            errorMessage.textContent = "Incorrect username or password. Please try again.";
            errorMessage.style.color = "red";
        }
    }
}
