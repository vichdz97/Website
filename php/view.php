<?php
    include_once("db_connect.php");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    if (isset($postdata) && !empty($postdata)) {
        $sql = "SELECT * FROM Contacts";
        if ($result = mysqli_query($mysqli, $sql)) {
            $rows = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else {
            http_response_code(404);
        }
    }
?>