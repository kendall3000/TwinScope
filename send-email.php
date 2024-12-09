<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $contactOption = $_POST['contact-option'];
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Define recipient emails
    $emails = [
        "Kendall" => "kendallramos03@gmail.com",
        "Kameron" => "kameronramos16@gmail.com",
        "Both" => ["kendallramos03@gmail.com", "kameronramos16@gmail.com"]
    ];

    // Determine recipients
    $to = $emails[$contactOption];
    if (is_array($to)) {
        $to = implode(",", $to);
    }
    
    // Email content
    $subject = "New Message from $name";
    $body = "You have received a new message:\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message\n";

    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>
