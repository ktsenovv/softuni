<?php
$budget = intval(readline());
$num_subj = intval(readline());

$total_price = 0;

for($i = 1; $i <= $num_subj; $i++)
{
	$subject = readline();
	if($subject == 'hoodie') $total_price += 30;
	else if($subject == 'keychain') $total_price += 4;
	else if($subject == 'T-shirt') $total_price += 20;
	else if($subject == 'flag') $total_price += 15;
	else if($subject == 'sticker') $total_price += 1;
}

if($budget >= $total_price) printf('You bought %d items and left with %d lv.', $num_subj, $budget - $total_price);
else printf('Not enough money, you need %d more lv.', abs($budget - $total_price));
?>