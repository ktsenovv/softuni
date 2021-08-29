<?php
$n = intval(readline());

$cur = 1;
$isBigger = false;

for($row = 1; $row <= $n; $row++)
{
	for($col = 1; $col <= $row; $col++)
	{
		if($cur > $n)
		{
			$isBigger = true;
			break;
		}
		echo $cur.' ';
		$cur++;
	}
	if($isBigger) break;
	echo PHP_EOL;
}
?>