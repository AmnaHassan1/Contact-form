function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var thankYouMessage = document.getElementById("thankYouMessage");

    // Basic email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Show Thank You message on successful submission
    thankYouMessage.style.display = "block";

    // Clear the form after submission
    document.getElementById("contactForm").reset();

    // Prevent actual form submission for demo purposes
    return false;
}
