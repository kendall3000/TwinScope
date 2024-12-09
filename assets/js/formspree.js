document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const contactOption = document.getElementById("contact-option").value;
    let formAction;

    // Set the recipient email based on selection
    if (contactOption === "Kendall") {
        formAction = "https://formspree.io/f/xdkovzze"; // Formspree endpoint for Kendall
    } 
    else if (contactOption === "Kameron") {
        formAction = "https://formspree.io/f/mjkvdrrg"; // Formspree endpoint for Kameron
    } 
    else {
        formAction = "https://formspree.io/f/xpwzerdn"; // Formspree endpoint for Both right now sends to me until i upgrade to do both
    }

    // Update form action dynamically
    const form = document.getElementById("contact-form");
    form.action = formAction;

    // Submit the form after action is set
    form.submit();
});
