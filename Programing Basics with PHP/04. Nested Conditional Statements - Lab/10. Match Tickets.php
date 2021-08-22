<?php
$budget = floatval(readline());
$ticket = strtolower(readline());
$members = intval(readline());

if($members >= 1 && $members <= 4) $money_left = $budget - ($budget * 0.75);
else if($members >= 5 && $members <= 9) $money_left = $budget - ($budget * 0.60);
else if($members >= 10 && $members <= 24) $money_left = $budget - ($budget * 0.50);
else if($members >= 25 && $members <= 49) $money_left = $budget - ($budget * 0.40);
else if($members > 50) $money_left = $budget - ($budget * 0.25);

if($ticket == 'normal') $money_tickets = 249.99 * $members;
else if($ticket == 'vip') $money_tickets = 499.99 * $members;

if($money_left > $money_tickets) printf('Yes! You have %.2f leva left.', $money_left - $money_tickets);
else  printf('Not enough money! You need %.2f leva.', abs($money_left - $money_tickets));
?>