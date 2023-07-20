<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "tommasofacchin77@gmail.com";
    $subject = "Nuovo messaggio dal form di contatto";
    $body = "Nome: $name\nEmail: $email\nMessaggio:\n$message";
    
    if(mail($to, $subject, $body)) {
        echo "Messaggio inviato con successo!";
    } else {
        echo "Si è verificato un errore durante l'invio del messaggio.";
    }
}
?>