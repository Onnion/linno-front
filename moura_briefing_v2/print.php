<?php
date_default_timezone_set('America/Recife');


function auditLog($text)
{
    $fp = fopen("log.txt", "a");
    fwrite($fp, "\Moura Registro: " . date('d/m/Y h:i:s A'));
    fwrite($fp, "\n" . $text);
    fclose($fp);
}

$json = file_get_contents('php://input');
// $data = json_decode($json);

auditLog($json);