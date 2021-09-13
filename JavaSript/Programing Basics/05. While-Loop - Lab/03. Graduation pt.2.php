<?php
$name = readline();
$count = 1;
$sum = 0;

$repeat = 0;
$exclude = false;

while($count <= 12)
{
	$grade = floatval(readline());
	if($grade >= 4.00)
	{
		$sum += $grade;
		$count++;
	}
	else $repeat++;
	
	if($repeat >= 2)
	{
		$exclude = true;
		break;
	}
}

if(!$exclude)
{
	$average = $sum / 12;
	printf('%s graduated. Average grade: %.2f', $name, $average);
}
else printf('%s has been excluded at %d grade', $name, $count);
?>