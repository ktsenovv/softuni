<?php
$num = intval(readline());
$lenght = floatval(readline());
$width = floatval(readline());

$tablecloth_area = $num * ($lenght + 2 * 0.30) * ($width + 2 * 0.30);
$square_area = $num * ($lenght / 2) * ($lenght / 2);

$usd_price = $tablecloth_area * 7 + $square_area * 9;
$bgn_price = $usd_price * 1.85;

printf("%.2f USD\n%.2f BGN", $usd_price, $bgn_price);
?>