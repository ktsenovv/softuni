<?php
$l = floatval(readline());
$w = floatval(readline());
$a = floatval(readline())*100;

$hall_size = ($l * 100) * ($w * 100);
$wardrobe_size = ($a * $a);
$bench_size = $hall_size / 10;

$free_space = $hall_size - $wardrobe_size - $bench_size;
$dancers = $free_space / (40 + 7000);

echo intval($dancers);
?>