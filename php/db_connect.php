<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json; charset=UTF-8");

    $host_name = 'db5013073668.hosting-data.io';
    $user_name = 'dbu2864790';
    $password = 'Victor-Jr!!IONOS-21.Website_Contact_Data';
    $database = 'dbs10975990';

    $link = new mysqli($host_name, $user_name, $password, $database);

    if ($link->connect_error) {
        die('<p>Failed to connect to MySQL: '. $link->connect_error .'</p>');
    } else {
        echo '<p>Connection to MySQL server successfully established.</p>';
    }
?>