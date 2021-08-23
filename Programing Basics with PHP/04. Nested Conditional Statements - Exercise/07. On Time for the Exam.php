<?php
$exam_h = intval(readline());
$exam_m = intval(readline());
$arival_h = intval(readline());
$arival_m = intval(readline());

$exam_inm = $exam_h * 60 + $exam_m;
$arival_inm = $arival_h * 60 + $arival_m;

$difference = $exam_inm - $arival_inm;

if($difference >= 0 && $difference <= 30) echo 'On time'.PHP_EOL;
else if($difference > 30) echo 'Early'.PHP_EOL;
else if($difference < 0) echo 'Late'.PHP_EOL;

if($difference >= 1)
{
	$hh = $difference / 60;
	$mm = $difference % 60;
	if($difference < 60) printf('%d minutes before the start', $difference);
	else printf('%d:%s hours before the start', $hh, $mm < 10 ? $mm = '0'.$mm : $mm);
}
else if($difference <= -1)
{
	$hh = abs($difference) / 60;
	$mm = abs($difference) % 60;
	if($difference > -60) printf('%d minutes after the start', abs($difference));
	else printf('%d:%s hours after the start', $hh, $mm < 10 ? $mm = '0'.$mm : $mm);
}
?>