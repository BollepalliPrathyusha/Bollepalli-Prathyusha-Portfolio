// DARK / LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});// DYNAMIC GREETING

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning! Welcome to my portfolio.";
} 
else if (hour < 18) {
    greeting.textContent = "Good Afternoon! Welcome to my portfolio.";
} 
else {
    greeting.textContent = "Good Evening! Welcome to my portfolio.";
}
// PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {

            const category = project.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                project.style.display = "block";
            } 
            else {
                project.style.display = "none";
            }

        });

    });

});
// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("successMessage");


    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";


    let valid = true;


    if (name === "") {

        nameError.textContent = "Please enter your name.";

        valid = false;

    }


    if (email === "") {

        emailError.textContent = "Please enter your email.";

        valid = false;

    }

    else if (!email.includes("@")) {

        emailError.textContent = "Please enter a valid email.";

        valid = false;

    }


    if (message === "") {

        messageError.textContent = "Please enter your message.";

        valid = false;

    }


    if (valid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

    }

});