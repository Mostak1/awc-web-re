<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$from = "mostak@mostaksarker.com";
$to = "mdmostaka@gmail.com";

$subject="mail subject";
$message="mail message";

mail($to,$subject,$message);
?>