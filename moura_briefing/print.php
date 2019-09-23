<?php
date_default_timezone_set('America/Recife');


function auditLog($text)
{
    $fp = fopen("log.txt", "a");
    fwrite($fp, "\nSyonet: " . date('d/m/Y h:i:s A'));
    fwrite($fp, "\n" . $text);
    fclose($fp);
}


auditLog($_POST['form']);
auditLog('testando');