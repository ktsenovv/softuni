<?php
$year = readline();
$p = intval(readline());
$h = intval(readline());

$weeksinsf = 48 - $h;
$numplaysinsf = $weeksinsf * (3.0 / 4);
$numplaysinbc = $h;
$numplaysinp = $p * (2.0 / 3);

$numplaystotal = $numplaysinsf + $numplaysinbc + $numplaysinp;

if($year == 'leap') $numplaystotal = $numplaystotal + ($numplaystotal * 0.15);

echo floor($numplaystotal);
?>