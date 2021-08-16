<?php
$lenght = intval(readline());
$width = intval(readline());
$height = intval(readline());
$percent = floatval(readline());

$aquarium_volume = $lenght * $width * $height;
$aquarium_maxl = $aquarium_volume * 0.001;
$aquarium_percent = $percent * 0.01;

$litersneeded = $aquarium_maxl * (1 - $aquarium_percent);
echo round($litersneeded, 3);
?>