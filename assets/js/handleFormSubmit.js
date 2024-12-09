function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = document.getElementById("contact-form");

    // Make sure the form is submitted to Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            form.reset(); // Reset form after successful submission

            // Wait a moment to let the reset happen, then redirect to contact.html
            setTimeout(() => {
                window.location.href = 'contact.html'; // Automatically reload or redirect to contact.html
            }, 1000); // Adjust the time based on your preference
        } else {
            setTimeout(() => {
                window.location.href = 'contact.html'; // Automatically reload or redirect to contact.html
            }, 1000);
        }
    })
    .catch(error => {
        alert("There was an error. Please try again later.");
    });
}
