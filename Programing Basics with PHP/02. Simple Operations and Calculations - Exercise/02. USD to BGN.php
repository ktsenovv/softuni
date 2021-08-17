<?php
$usd = floatval(readline());
$bgn = 1.79549;

$converted = $usd * $bgn;
printf("%.2f BGN", $converted);
?>