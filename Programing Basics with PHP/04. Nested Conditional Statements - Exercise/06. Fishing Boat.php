<?php
$budget = intval(readline());
$season = readline();
$group = intval(readline());

switch($season)
{
	case 'Spring': $rent = 3000; break;
	case 'Summer': $rent = 4200; break;
	case 'Autumn': $rent = 4200; break;
	case 'Winter': $rent = 2600; break;
}

if($group <= 6) $discount = $rent * 0.10;
else if($group >= 7 && $group <= 11) $discount = $rent * 0.15;
else if($group >= 12) $discount = $rent * 0.25;

if(($group % 2 == 0) && ($season != 'Autumn')) $discount += ($rent - $discount) * 0.05;

$total_price = $rent - $discount;

if($budget >= $total_price) printf('Yes! You have %.2f leva left.', $budget - $total_price);
else printf('Not enough money! You need %.2f leva.', abs($budget - $total_price));
?>