<?php
$record = floatval(readline());
$distance = floatval(readline());
$time = floatval(readline());

$speed = $distance * $time;
$current = floor($distance / 15) * 12.5;
$total_time = $speed + $current;

if($record > $total_time) printf("Yes, he succeeded! The new world record is %.2f seconds.", $total_time);
else printf("No, he failed! He was %.2f seconds slower.", abs($record - $total_time));
?>