<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mail";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $EmailTo = "wassimrahali40@gmail.com";
    $Subject = "New Message Received";
    
    // Initialize email body text
    $Fields = "";
    $Fields .= "Name: " . $name . "\n";
    $Fields .= "Email: " . $email . "\n";
    $Fields .= "Message: " . $message . "\n";

    // send email
    $success = mail($EmailTo, $Subject, $Fields, "From:".$email);

    if ($success) {
        echo "Message sent successfully!";
        
        // Insert data into the database
        $sql = "INSERT INTO form (Name, email, message) VALUES ('$name', '$email', '$message')";

        if ($conn->query($sql) === TRUE) {
            echo "Form data stored in database successfully!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}

$conn->close();
?>
