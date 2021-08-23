<?php
$projection = readline();
$rows = intval(readline());
$cols = intval(readline());

$count = $rows * $cols;

switch($projection)
{
	case 'Premiere': $price = $count * 12; break;
	case 'Normal': $price = $count * 7.50; break;
	case 'Discount': $price = $count * 5; break;
}

printf('%.2f leva', $price);
?>