<?php
$num = intval(readline());
$max = intval(readline());

for($i=1; $i <= $num-1; $i++)
{
	$input = intval(readline());
	if($input < $max) $max = $input;
}
echo $max;
?>