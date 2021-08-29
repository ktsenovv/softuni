<?php
$limit = intval(readline());

$counter = 0;
$sum = 0;
$fishPrice = 0;
$fishes = 0;
 
for($i = 1; $i <= $limit; $i++)
{
	$name = readline();              
	if($name == "Stop") break;
	
	$fishes++;
	$weight = floatval(readline());
	$fishPrice = 0;
	
	for($j = 0; $j < strlen($name); $j++)
		$fishPrice += ord($name[$j]);
	
	$counter++;
	if($counter == 3)
	{
		$sum += ($fishPrice / $weight);
		$counter = 0;
	}
	else if ($counter < 3) $sum -= ($fishPrice / $weight);          
}
           
if ($name == "Stop")
{
	if ($sum < 0) printf("Lyubo lost %.2f leva today.", abs($sum));
	else printf("Lyubo's profit from %d fishes is %.2f leva.", $fishes, $sum);
}
else
{
	print("Lyubo fulfilled the quota!".PHP_EOL);
	if($sum < 0) printf("Lyubo lost %.2f leva today.", abs($sum));
	else printf("Lyubo's profit from %d fishes is %.2f leva.", $fishes, $sum);
}
?>