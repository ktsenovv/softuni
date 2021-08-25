<?php
$width = intval(readline());
$lenght = intval(readline());
$height = intval(readline());

$total_space = $width * $lenght * $height;
$carton_sum = 0;

while($total_space >= $carton_sum)
{
	$input = readline();
	
	if($input == 'Done') break;
	
	$carton_sum += $input;
	
	
}

$left_space = $total_space - $carton_sum;

if($total_space > $carton_sum) echo $left_space.' Cubic meters left.';
else echo 'No more free space! You need '.abs($left_space).' Cubic meters more.';
?>