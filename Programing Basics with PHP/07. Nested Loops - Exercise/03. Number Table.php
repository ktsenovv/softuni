<?php
$n = intval(readline());

$cur = 1;

for($row = 0; $row < $n; $row++)
{
	for($col = 0; $col < $n; $col++)
	{
		$cur = $row + $col + 1;
		if($cur > $n) $cur = 2 * $n - $cur;
		echo $cur.' ';
	}
	echo PHP_EOL;
}
?>