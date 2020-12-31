<?php
// Content of database.php, taken from mysql and php wiki file

$mysqli = new mysqli('localhost', 'wustl_inst', 'wustl_pass', 'uno');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>

