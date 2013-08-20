<?php
//Recuperiamo tutte le variabili
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$text = $_POST['text'];
	$ip = $_SERVER['REMOTE_ADDR'];
	
//Qui andrà inserito il tuo indirizzo e-mail
$to = "marvil.joy@gmail.com";

//Creazione del mesaggio da inviare
$message = "New message from: ".$name.", ".$mail.".<br />";
$message .= "Text: <br />".$text."<br /><br />";
$message .= "IP: ".$ip."<br />";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: Marvil Joy Github"; 

//Se l'e-mail viene spedita correttamente, compare un messaggio di avvenuto invio
 if(mail($to, $subject,$message, $headers)){
	echo "<p>Message sent! Thanks!</p>";
}
//Altrimenti un messaggio di errore
else{ 
	echo "<p>Error</p>";
}
?>