<?php
$price_tour = floatval(readline());
$num_puzzles = intval(readline());
$num_dolls = intval(readline());
$num_bears = intval(readline());
$num_minions = intval(readline());
$num_trucks = intval(readline());

$price_puzzles = 2.60;
$price_dolls = 3;
$price_bears = 4.10;
$price_minions = 8.20;
$price_trucks = 2;

$num_total = $num_puzzles + $num_dolls + $num_bears + $num_minions + $num_trucks;
$price_total = ($num_puzzles * $price_puzzles) + ($num_dolls * $price_dolls) + ($num_bears * $price_bears) + ($num_minions * $price_minions) + ($num_trucks * $price_trucks);

if($num_total >= 50)
	$discount = 25/100;
else
	$discount = 0;

$price_final = $price_total - ($price_total * $discount);
$money_left = $price_final - ($price_final * 10/100);

if($money_left >= $price_tour)
	printf("Yes! %.2f lv left.", $money_left - $price_tour);
else
	printf("Not enough money! %.2f lv needed.", abs($money_left - $price_tour));
?>