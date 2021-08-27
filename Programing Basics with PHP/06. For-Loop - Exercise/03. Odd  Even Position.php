<?php
$n = intval(readline());

$num = 0;
$oddSum = 0;
$oddMin = 1000000000.0;
$oddMax = -1000000000.0;
$evenSum = 0;
$evenMin = 1000000000.0;
$evenMax = -1000000000.0;

for($i = 1; $i <= $n; $i++)
{
	$num = floatval(readline());
	
	if($i % 2 == 0)
	{
		$evenSum += $num;
		if($num > $evenMax) $evenMax = $num;
		if($num < $evenMin) $evenMin = $num;
	}
	else
	{
		$oddSum += $num;
		if($num > $oddMax) $oddMax = $num;
		if($num < $oddMin) $oddMin = $num;
	}
}

echo 'OddSum='.$oddSum.','.PHP_EOL;
echo 'OddMin='.($oddMin == 1000000000.0 ? 'No' : $oddMin).','.PHP_EOL;
echo 'OddMax='.($oddMax == -1000000000.0 ? 'No' : $oddMax).','.PHP_EOL;
echo 'EvenSum='.$evenSum.','.PHP_EOL;
echo 'EvenMin='.($evenMin == 1000000000.0 ? 'No' : $evenMin).','.PHP_EOL;
echo 'EvenMax='.($evenMax == -1000000000.0 ? 'No' : $evenMax);
?>