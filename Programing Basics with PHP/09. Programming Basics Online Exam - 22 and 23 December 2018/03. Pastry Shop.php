<?php
$sweet = readline();
$sweet_num = intval(readline());
$day = intval(readline());

switch($sweet)
{
	case 'Cake':
	{
		if($day <= 15) $sprice = 24;
		else $sprice = 28.70;
	} break;
	case 'Souffle':
	{
		if($day <= 15) $sprice = 6.66;
		else $sprice = 9.80;
	} break;
	case 'Baklava':
	{
		if($day <= 15) $sprice = 12.60;
		else $sprice = 16.98;
	} break;
}

$total = $sprice * $sweet_num;

if($day <= 22 && $total >= 100 && $total <= 200) $total = $total - $total * 0.15;
else if($day <= 22 && $total > 200) $total = $total - $total * 0.25;

if($day <= 15) $total = $total - $total * 0.10;

printf('%.2f', $total);
?>