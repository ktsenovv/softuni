<?php
$money_excursion = floatval(readline());
$money_available = floatval(readline());

$days = 0;
$spend = 0;

while(true)
{
	$operation = readline();
	$money = floatval(readline());
	
	$days++;
	
	if($operation == 'save')
	{
		$spend = 0;
		$money_available += $money;
	}
	else if($operation == 'spend')
	{
		$spend++;
		$money_available -= $money;
		
		if($money > $money_available) $money_available = 0;
	}
	
	if($money_available >= $money_excursion)
	{
		echo 'You saved the money for '.$days.' days.';
		break;
	}
	
	if($spend >= 5)
	{
		echo 'You can\'t save the money.'.PHP_EOL;
		echo $days;
		break;
	}
}
?>