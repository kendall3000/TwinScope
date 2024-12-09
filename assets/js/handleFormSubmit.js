function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
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
        formAction = "https://formspree.io/f/xpwzerdn"; // Formspree endpoint for Both
    }

    // Update form action dynamically
    form.action = formAction;

    // Make sure the form is submitted to Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            form.reset(); // Reset form after successful submission
            successMessage.style.display = 'block'; // Show success message
            setTimeout(() => {
                successMessage.style.display = 'none'; // Hide success message after 5 seconds
            }, 5000); // Adjust the time based on your preference
        } else {
            alert("There was an issue with your submission. Please try again.");
        }
    })
    .catch(error => {
        alert("There was an error. Please try again later.");
    });
}