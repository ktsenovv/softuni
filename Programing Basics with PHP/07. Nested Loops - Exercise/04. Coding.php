<?php
$n = intval(readline());

$ln = $n;

for($row = 1; $row <= strlen(strval($n)); $row++)
{
	$number = $ln % 10;
	$ln = ($ln - $number) / 10;
	
	if($number == 0) echo 'ZERO';
	
	for ($col = 1; $col <= $number; $col++) echo chr($number + 33);
	echo PHP_EOL;
}
?>