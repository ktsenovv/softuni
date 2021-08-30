<?php
$fen_name = readline();
$budget = floatval(readline());
$beers_num = intval(readline());
$chips_num = intval(readline());

$beers_price = $beers_num * 1.20;
$chips_price = ceil(($beers_price * 0.45) * $chips_num);
$total_price = $beers_price + $chips_price;

if($budget >= $total_price) printf('%s bought a snack and has %.2f leva left.', $fen_name, $budget - $total_price);
else printf('%s needs %.2f more leva!', $fen_name, abs($budget - $total_price));
?>