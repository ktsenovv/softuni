<?php
$tabs = intval(readline());
$salary = intval(readline());

for($i = 0; $i < $tabs; $i++)
{
	$browser = strtolower(readline());
	
	if($browser == 'facebook') $salary -= 150;
	else if($browser == 'instagram') $salary -= 100;
	else if($browser == 'reddit') $salary -= 50;
	
	if($salary <= 0) break;
}

if($salary > 0) echo $salary;
else echo 'You have lost your salary.';
?>