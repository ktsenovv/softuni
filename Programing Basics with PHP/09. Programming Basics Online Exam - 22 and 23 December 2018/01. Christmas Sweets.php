<?php
$baklavappk = floatval(readline());
$mufinippk = floatval(readline());
$shtolenk = floatval(readline());
$bonbonik = floatval(readline());
$biskvitik = intval(readline());

$shtolenppk = ($baklavappk + $baklavappk * 0.60) * $shtolenk;
$bonbonippk = ($mufinippk + $mufinippk * 0.80) * $bonbonik;
$biskvitippk = $biskvitik * 7.50;

$total = $shtolenppk + $bonbonippk + $biskvitippk;

printf('%.2f', $total);
?>