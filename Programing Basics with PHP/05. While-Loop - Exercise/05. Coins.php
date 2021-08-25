<?php
$money = floatval(readline()) * 100;

$rest = 0;
$coins = 0;

while($money > 0)
{
	// 2 lv
	$rest = $money % 200;
	$coins += floor($money / 200);
	$money = $money - $coins * 200;
	
	// 1 lv
	$money = $rest;
	$rest = $money % 100;
	$coins += floor($money / 100);
	$money = $money - $coins * 100;
	
	// 0.50 lv
	$money = $rest;
	$rest = $money % 50;
	$coins += floor($money / 50);
	$money = $money - $coins * 50;
	
	// 0.20 lv
	$money = $rest;
	$rest = $money % 20;
	$coins += floor($money / 20);
	$money = $money - $coins * 20;
	
	// 0.10 lv
	$money = $rest;
	$rest = $money % 10;
	$coins += floor($money / 10);
	$money = $money - $coins * 10;
	
	// 0.05 lv
	$money = $rest;
	$rest = $money % 5;
	$coins += floor($money / 5);
	$money = $money - $coins * 5;
	
	// 0.02 lv
	$money = $rest;
	$rest = $money % 2;
	$coins += floor($money / 2);
	$money = $money - $coins * 2;
	
	// 0.01 lv
	$money = $rest;
	$rest = $money % 1;
	$coins += floor($money / 1);
	$money = $money - $coins * 1;
}
echo $coins;
?>