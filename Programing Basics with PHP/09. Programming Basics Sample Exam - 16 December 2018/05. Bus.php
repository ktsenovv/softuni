<?php
$passengers_num = intval(readline());
$stops_num = intval(readline());

for($i = 1; $i <= $stops_num; $i++)
{
	$passengers_left = intval(readline());
	$passengers_come = intval(readline());
	
	$passengers_num = $passengers_num - $passengers_left + $passengers_come;
	if($i % 2 == 0) $passengers_num -= 2;
	else $passengers_num += 2;
}

echo 'The final number of passengers is : '.$passengers_num;
?>