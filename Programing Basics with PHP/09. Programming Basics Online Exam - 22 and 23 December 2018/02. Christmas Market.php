<?php
$money_needed = floatval(readline());
$fentuzi_num = intval(readline());
$horor_num = intval(readline());
$romantichni_num = intval(readline());

$total_sum = $fentuzi_num * 14.90 + $horor_num * 9.80 + $romantichni_num * 4.30;
$total_sum = $total_sum - $total_sum * 0.20;

if($total_sum > $money_needed)
{
	$sellers = floor(($total_sum - $money_needed) * 0.10);
	$money_donate = ($total_sum - $money_needed) - $sellers + $money_needed;
	printf('%.2f leva donated.'.PHP_EOL, $money_donate);
	echo 'Sellers will receive '.$sellers.' leva.';
}
else printf('%.2f money needed.', abs($money_needed - $total_sum));
?>