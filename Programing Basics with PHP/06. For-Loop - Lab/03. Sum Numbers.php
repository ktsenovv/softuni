<?php
$num = intval(readline());

$sum = 0;

for($i=1; $i <= $num; $i++)
{
	$input = intval(readline());
	$sum += $input;
}
echo $sum;
?>