<?php
$hours = 12;
$minutes = 49;

$minutesl = $minutes + 15;

if($minutesl > 59)
{
	$hours++;
	$minutesl -= 60;
}

if($hours > 23) $hours = 0;

echo $hours.':'.($minutesl < 10 ? '0'.$minutesl : $minutesl);
?>