<?php
$num = intval(readline());

$sum = 0;
$max = 0;

for($i = 0; $i < $num; $i++)
{
	$m = intval(readline());
	$sum += $m;
	
	if($i == 0) $max = $m;
	if($m > $max) $max = $m;
}

$sum -= $max;

if($sum == $max)
{
	echo 'Yes'.PHP_EOL;
	echo 'Sum = '.$max;
}
else
{
	echo 'No'.PHP_EOL;
	echo 'Diff = '.abs($sum - $max);
}
?>