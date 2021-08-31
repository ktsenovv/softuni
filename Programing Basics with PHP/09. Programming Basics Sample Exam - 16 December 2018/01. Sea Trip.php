<?php
$money_food = floatval(readline());
$money_souvenirs = floatval(readline());
$money_hotel = floatval(readline());

$benzin = 420 / 100 * 7;
$money_benzin = $benzin * 1.85;

$money_fs = 3 * $money_food + 3 * $money_souvenirs;

$money_hotel_d1 = $money_hotel * 0.9;
$money_hotel_d2 = $money_hotel * 0.85;
$money_hotel_d3 = $money_hotel * 0.8;

$total = $money_benzin + $money_fs + $money_hotel_d1 + $money_hotel_d2 + $money_hotel_d3;

printf('Money needed: %.2f', $total);
?>