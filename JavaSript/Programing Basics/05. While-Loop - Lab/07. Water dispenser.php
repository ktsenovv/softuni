<?php
$input = intval(readline());

$count = 0;
$sum = 0;

while(true)
{
	switch(strtolower(readline()))
	{
		case 'easy': $sum += 50; break;
		case 'medium': $sum += 100; break;
		case 'hard': $sum += 200; break;
	}
	
	$count++;
	
	if($input <= $sum) break;
}

$spilled = $sum - $input;

if($input == $sum) echo 'The dispenser has been tapped '.$count.' times.';
else if($input < $sum) echo $spilled.'ml has been spilled.';
?>