<?php
$time_brother1 = floatval(readline());
$time_brother2 = floatval(readline());
$time_brother3 = floatval(readline());
$time_father = floatval(readline());

$time_all = 1 / (1/$time_brother1 + 1/$time_brother2 + 1/$time_brother3);
$time_rest = $time_all * 0.15;
$time_withrest = $time_all + $time_rest;
$time_left = $time_father - $time_withrest;

printf("Cleaning time: %.2f".PHP_EOL, $time_withrest);
if($time_left > 0) printf("Yes, there is a surprise - time left -> %d hours.", floor($time_left));
else printf("No, there isn't a surprise - shortage of time -> %d hours.", ceil(abs($time_left)));
?>