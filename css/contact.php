<?php
// Your database connection details
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "feedbackiste"; // Change this to your actual database name

// Create a database connection
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate and process the form data
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Assuming your form has fields named contact-name, contact-email, etc.
    $name = $_POST["contact-name"];
    $email = $_POST["contact-email"];
    $phone = $_POST["contact-phone"];
    $subject = $_POST["contact-subject"];
    $message = $_POST["contact-message"];

    // Prepare and execute an SQL INSERT statement
    $stmt = $conn->prepare("INSERT INTO isteformdata (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $email, $phone, $subject, $message);
    $stmt->execute();

    // Close the prepared statement and the database connection
    $stmt->close();
    $conn->close();

    // For demonstration purposes, a simple response is sent back
    if ($name && $email && $subject && $message) {
        $response = array("type" => "success", "msg" => "Form submitted successfully!");
    } else {
        $response = array("type" => "error", "msg" => "Please fill in all required fields.");
    }

    // Send the JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Handle invalid requests (GET requests, direct access, etc.)
    $response = array("type" => "error", "msg" => "Invalid request.");
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
