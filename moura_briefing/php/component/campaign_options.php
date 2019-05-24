<?php

    $current_month = date('n');
    $last_month = 12;
    for ($i = 1; $i <= $last_month-$current_month; $i++) {
        if ($i == 1) {
            echo "<option value='1 mês'>1 mês</option>";
        } else {
            echo "<option value='{$i} meses'>{$i} meses</option>";
        }
    }

?>
