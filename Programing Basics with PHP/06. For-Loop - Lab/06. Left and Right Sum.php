<?php
$num = intval(readline());

$left = 0;
$right = 0;

for($i=1; $i <= $num*2; $i++)
{
	$input = intval(readline());
	if($i <= $num) $left += $input;
	else if($i > $num) $right += $input;
}

if($left == $right) echo "Yes, sum = ".$left;
else echo "No, diff = ".abs($left - $right);
?>