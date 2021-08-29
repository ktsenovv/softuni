<?php
$sum1 = 0;
$sum2 = 0;

while(true)
{
	$input = readline();
	
	if($input == "stop") break;
	
	$number = intval($input);
	$counter = 0;
	
	for($i = 2; $i <= $number / 2; $i++)
	{
		if($number % $i == 0)
		{
			$counter++ ; 
			break;
		}
	}
	
	if($number < 0) echo 'Number is negative.'.PHP_EOL;
	else if($counter > 0 || $number == 1) $sum2 += $number;
	else $sum1 += $number;
}
echo 'Sum of all prime numbers is: '.$sum1.PHP_EOL;
echo 'Sum of all non prime numbers is: '.$sum2;
?>