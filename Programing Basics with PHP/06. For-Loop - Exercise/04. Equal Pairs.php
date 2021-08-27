<?php
$n = intval(readline());

$bdiff = 0;
$sumP = 0;
$sumC = 0;

for($i = 1; $i <= $n; $i++)
{
	$first = intval(readline());
	$second = intval(readline());
	
	if($i == 1) $sumP = $first + $second;
	else
	{
		$sumC = $first + $second;
		$diff = abs($sumC - $sumP);
		
		if($diff > $bdiff) $bdiff = $diff;
		$sumP = $sumC;
	}
}

if($bdiff == 0) echo "Yes, value =".$sumP;
else echo "No, maxdiff =".$bdiff;
?>