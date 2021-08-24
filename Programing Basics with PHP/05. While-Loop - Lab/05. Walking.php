<?php
$input = readline();

$steps_target = 10000;
$steps_sum = 0;

while(true)
{
	if($input == 'Going home')
	{
		$steps_final = readline();
		$steps_sum += $steps_final;
		break;
	}
	else
	{
		$setps_current = $input;
		$steps_sum += $setps_current;
		
		if($steps_sum >= $steps_target) break;
	}
	
	$input = readline();
}

$steps_left = $steps_target - $steps_sum;

if($steps_sum >= $steps_target) echo 'Goal reached! Good job!';
else echo $steps_left.' more steps to reach goal.';
?>