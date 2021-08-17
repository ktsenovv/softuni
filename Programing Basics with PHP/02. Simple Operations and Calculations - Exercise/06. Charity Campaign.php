<?php
$days = intval(readline());
$confectioners = intval(readline());
$cakes = intval(readline());
$waffles = intval(readline());
$pancakes = intval(readline());

$cakes_tp = $cakes * 45;
$waffles_tp = $waffles * 5.80;
$pancakes_tp = $pancakes * 3.20;

$tp_day = ($cakes_tp + $waffles_tp + $pancakes_tp) * $confectioners;
$tp_campaign = $tp_day * $days;
$smoney = $tp_campaign - ($tp_campaign * 1/8);

printf("%.2f", $smoney);
?>