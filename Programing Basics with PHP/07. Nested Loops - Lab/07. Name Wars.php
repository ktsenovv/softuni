<?php
$maxSum = 0;

while(true)
{
	$input = readline();
	
	if($input == 'STOP') break;
	
	$curSum = 0;
	for($i = 0; $i <= strlen($input)-1; $i++) $curSum += ord($input[$i]);
	
	if($curSum > $maxSum)
	{
		$maxSum = $curSum;
		$name = $input;
	}
}
printf("Winner is %s - %s!", $name, $maxSum);
?>