<?php
$num_steps = intval(readline());
$num_dancers = intval(readline());
$num_days = intval(readline());

$steps_per_day = ($num_steps / $num_days) / $num_steps;

$percent = ceil($steps_per_day * 100);
$total_percent = $percent / $num_dancers;

if($percent <= 13) printf("Yes, they will succeed in that goal! %.2f%%.", $total_percent);
else printf("No, they will not succeed in that goal! Required %.2f%% steps to be learned per day.", $total_percent);
?>