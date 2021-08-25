<?php
$cake_width = intval(readline());
$cake_lenght = intval(readline());

$cake_whole = $cake_width * $cake_lenght;

$left = 0;

while(true)
{
	$pieces = readline();
	
	if($pieces == 'STOP')
	{
		echo $cake_whole.' pieces are left.';
		break;
	}
	
	$cake_whole -= $pieces;
	
	if($cake_whole < 0)
	{
		echo 'No more cake left! You need '.abs($cake_whole).' pieces more.';
		break;
	}
}
?>