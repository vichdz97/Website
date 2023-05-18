<?php
    include_once("db_connect.php");

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $name = mysqli_real_escape_string($mysqli, trim($request->name));
        $email = mysqli_real_escape_string($mysqli, trim($request->email));
        $subject = mysqli_real_escape_string($mysqli, trim($request->subject));
        $message = mysqli_real_escape_string($mysqli, trim($request->message));
        $sql = "INSERT INTO Contacts(name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'name' => $name,
                'email' => $email,
                'subject' => $subject,
                'message' => $message,
                'id' => mysqli_insert_id($mysqli)
            ];
            echo json_encode($authdata);
        }
    }
?>
