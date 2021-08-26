<?php
$num = intval(readline());

$even = 0;
$odd = 0;

for($i=1; $i <= $num; $i++)
{
	$input = intval(readline());
	
	if ($i % 2 == 0) $even += $input;
	else $odd += $input;
}

if($even == $odd) echo "Yes, sum = ".$even;
else echo "No, diff = ".abs($even - $odd);
?>