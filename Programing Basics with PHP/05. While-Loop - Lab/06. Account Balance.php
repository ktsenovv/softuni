<?php
$input = intval(readline());

$count = 1;
$sum = 0;

while($input >= $count)
{
	$money_ins = floatval(readline());
	
	if($money_ins < 0)
	{
		echo 'Invalid operation!'.PHP_EOL;
		break;
	}
	
	printf('Increase: %.2f'.PHP_EOL, $money_ins);
	$sum += $money_ins;
	$count++;
}

printf('Total: %.2f', $sum);
?>