<?php
$n = intval(readline());

$p1 = 0;
$p2 = 0;
$p3 = 0;
$p4 = 0;
$p5 = 0;

for($i = 0; $i < $n; $i++)
{
	$input = intval(readline());
	
	if($input >= 800) $p5++;
	else if($input < 200) $p1++;
	else if($input < 400) $p2++;
	else if($input < 600) $p3++;
	else  $p4++;
}

$p1 = sprintf('%.2f', $p1 / $n * 100);
$p2 = sprintf('%.2f', $p2 / $n * 100);
$p3 = sprintf('%.2f', $p3 / $n * 100);
$p4 = sprintf('%.2f', $p4 / $n * 100);
$p5 = sprintf('%.2f', $p5 / $n * 100);

echo $p1.'%'.PHP_EOL;
echo $p2.'%'.PHP_EOL;
echo $p3.'%'.PHP_EOL;
echo $p4.'%'.PHP_EOL;
echo $p5.'%';
?>