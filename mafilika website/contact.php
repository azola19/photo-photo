<?php

if(isset($_POST['submit']))
$name = $_POST['name'];
$surname = $_POST['surname'];
$mailFrom = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mailTo = "lindekaqampi@gmail.com";
$headers = "from: ".$mailFrom;
$text = "you have a new message".$name. ".\n\n".$message

mail($mailTo, $subject, $text, $headers);
header(location:contactt.php?mailsend);