function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

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
            }, 10000); // Adjust the time based on your preference
        } else {
            alert("There was an issue with your submission. Please try again.");
        }
    })
    .catch(error => {
        alert("There was an error. Please try again later.");
    });
}