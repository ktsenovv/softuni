<?php
$budget = intval(readline());

while(true)
{
	$input = readline();
	
	if($input == 'Stop')
	{
		echo 'Money left: '.$budget;
		break;
	}
	
	$iprice = 0;
	
	for($i = 0; $i <= strlen($input)-1; $i++)
	{
		$iprice += ord($input[$i]);
	}
	
	if($budget >= $iprice)
	{
		$budget -= $iprice;
		echo 'Item successfully purchased!'.PHP_EOL;
	}
	else if($budget < $iprice)
	{
		echo 'Not enough money!';
		break;
	}
}
?>