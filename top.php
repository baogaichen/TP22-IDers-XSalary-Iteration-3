<?php

$host = "localhost";
$uid = "root";
$pwd = "cinnamoroll";
$db = "xsalary";


$dbconnect = new mysqli($host, $uid, $pwd, $db);

if ($dbconnect->errno) {
    die($dbconnect->errno);
}

$top_sql = "SELECT * FROM industry_top";
$result = mysqli_query($dbconnect,$top_sql);
$data = mysqli_fetch_all($result);
$top_json = json_encode($data);


echo $top_json;

$dbconnect->close();

?>
