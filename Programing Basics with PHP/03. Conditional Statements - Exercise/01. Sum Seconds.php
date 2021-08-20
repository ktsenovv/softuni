<?php
$sp1 = intval(readline());
$sp2 = intval(readline());
$sp3 = intval(readline());

$sp_total = $sp1 + $sp2 + $sp3;

if($sp_total >= 0 && $sp_total < 60)
{
	$minutes = 0;
	$seconds = $sp_total;
}
else if($sp_total >= 60 && $sp_total < 120)
{
	$minutes = 1;
	$seconds = $sp_total - 60;
}
else if($sp_total >= 120 && $sp_total < 180)
{
	$minutes = 2;
	$seconds = $sp_total - 120;
}

echo $minutes.':'.($seconds < 10 ? '0'.$seconds : $seconds);
?>