<?php
$n = intval(readline());

$p1 = 0;
$p2 = 0;
$p3 = 0;

for($i = 0; $i < $n; $i++)
{
	$input = intval(readline());
	
	if($input % 2 == 0) $p1++;
	if($input % 3 == 0) $p2++;
	if($input % 4 == 0) $p3++;
}

$p1 = sprintf('%.2f', $p1 / $n * 100);
$p2 = sprintf('%.2f', $p2 / $n * 100);
$p3 = sprintf('%.2f', $p3 / $n * 100);

echo $p1.'%'.PHP_EOL;
echo $p2.'%'.PHP_EOL;
echo $p3.'%';
?>