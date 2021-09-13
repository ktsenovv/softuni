<?php
$name = readline();
$count = 1;
$sum = 0;

while($count <= 12)
{
	$grade = floatval(readline());
	if($grade >= 4.00)
	{
		$sum += $grade;
		$count++;
	}
}

$average = $sum / 12;
printf('%s graduated. Average grade: %.2f', $name, $average);
?>