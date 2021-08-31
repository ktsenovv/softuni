<?php
$ship_width = floatval(readline());
$ship_lenght = floatval(readline());
$ship_height = floatval(readline());
$astr_mid_height = floatval(readline());

$capacity_ship = $ship_width * $ship_lenght * $ship_height;
$capacity_room = ($astr_mid_height + 0.40) * 2 * 2;

$capacity = floor($capacity_ship / $capacity_room);

if($capacity > 10) echo 'The spacecraft is too big.';
else if($capacity >= 3 && $capacity <= 10) echo 'The spacecraft holds '.$capacity.' astronauts.';
else if($capacity < 3) echo 'The spacecraft is too small.';
?>