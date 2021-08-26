<?php
$age = intval(readline());
$wmachinep = floatval(readline());
$toyp = intval(readline());

$m = 0;
$money = 0;
$toys = 0;

for($i=1; $i <= $age; $i++)
{
	if ($i % 2 == 0)
	{
		$m += 10;
		$money = $money + $m - 1;
	}
	else $toys++;
}

$toys *= $toyp;
$money += $toys;

if($money >= $wmachinep) printf('Yes! %.2f', $money - $wmachinep);
else printf('No! %.2f', abs($money - $wmachinep));
?>