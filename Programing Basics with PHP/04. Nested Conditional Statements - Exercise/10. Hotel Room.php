<?php
$month = strtolower(readline());
$days = intval(readline());

if($month == 'may' || $month == 'october')
{
	$studio = 50;
	$apartment = 65;
	
	if($days > 7 && $days <= 14) $studio = $studio - ($studio * 0.05);
	else if($days > 14) $studio = $studio - ($studio * 0.30);
}
else if($month == 'june' || $month == 'september')
{
	$studio = 75.20;
	$apartment = 68.70;
	
	if($days > 14) $studio = $studio - ($studio * 0.20);
}
else if($month == 'july' || $month == 'august')
{
	$studio = 76;
	$apartment = 77;
}

if($days > 14) $apartment = $apartment - ($apartment * 0.10);

printf('Apartment: %.2f lv.'.PHP_EOL, $apartment * $days);
printf('Studio: %.2f lv.', $studio * $days);
?>