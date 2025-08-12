// Typing Animation for Heading
const heading = "Contact Us";
let index = 0;
function typeHeading() {
    if (index < heading.length) {
        document.getElementById("typing-heading").textContent += heading.charAt(index);
        index++;
        setTimeout(typeHeading, 250);
    }
}
typeHeading();

// Live Validation
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

nameInput.addEventListener("input", () => {
    document.getElementById("name-msg").textContent = nameInput.value.trim() === "" ? "Name is required" : "✅";
});

emailInput.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById("email-msg").textContent = emailPattern.test(emailInput.value) ? "✅" : "Invalid email";
});

messageInput.addEventListener("input", () => {
    document.getElementById("message-msg").textContent = messageInput.value.trim().length >= 10 ? "✅" : "Min 10 characters";
});

// Success Animation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameInput.value && emailInput.value && messageInput.value.length >= 10) {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("success-message").style.display = "block";
    }
});
