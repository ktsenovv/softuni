<?php
$type = readline();
$numflowers = intval(readline());
$budget = intval(readline());

switch($type)
{
	case 'Roses':
	{
		$price = 5 * $numflowers;
	
		if($numflowers > 80) $price = $price - ($price * 0.10);
	}; break;
	case 'Dahlias':
	{
		$price = 3.80 * $numflowers;
	
		if($numflowers > 90) $price = $price - ($price * 0.15);
	}; break;
	case 'Tulips':
	{
		$price = 2.80 * $numflowers;
	
		if($numflowers > 80) $price = $price - ($price * 0.15);
	}; break;
	case 'Narcissus':
	{
		$price = 3 * $numflowers;
	
		if($numflowers < 120) $price = $price + ($price * 0.15);
	}; break;
	case 'Gladiolus':
	{
		$price = 2.50 * $numflowers;
	
		if($numflowers < 80) $price = $price + ($price * 0.20);
	}; break;
}

if($budget >= $price) printf('Hey, you have a great garden with %d %s and %.2f leva left.', $numflowers, $type, $budget - $price);
else printf('Not enough money, you need %.2f leva more.', abs($budget - $price));
?>