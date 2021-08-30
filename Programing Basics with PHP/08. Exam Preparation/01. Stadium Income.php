<?php
$sect_num = intval(readline());
$stadium_cap = intval(readline());
$ppticket = floatval(readline());

$total_money = $ppticket * $stadium_cap;
$sect_money = $total_money / $sect_num;
$charity_money = ($total_money - ($sect_money * 0.75)) / 8;

printf('Total income - %.2f BGN'.PHP_EOL, $total_money);
printf('Money for charity - %.2f BGN'.PHP_EOL, $charity_money);
?>