<?php
$num = intval(readline());

if($num <= 100) $bonus = 5;
if($num > 100) $bonus = $num * 20/100;
if($num > 1000) $bonus = $num * 10/100;

if($num % 2 == 0)
	$bonus = $bonus + 1;
else if($num % 5 == 0)
	$bonus = $bonus + 2;

echo $bonus.PHP_EOL;
echo $num + $bonus;
?>