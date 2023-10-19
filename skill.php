<?php

$host = "localhost";
$uid = "root";
$pwd = "cinnamoroll";
$db = "xsalary";

$dbconnect = new mysqli($host, $uid, $pwd, $db);

if ($dbconnect->errno) {
    die($dbconnect->errno);
}

$skill_sql = "SELECT * FROM skill";
$result = mysqli_query($dbconnect,$skill_sql);
$data = mysqli_fetch_all($result);
$skill_json = json_encode($data);

echo $skill_json;

$dbconnect->close();

?>

