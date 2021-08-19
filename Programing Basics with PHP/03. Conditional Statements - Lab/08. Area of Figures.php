<?php
$type = readline();

switch($type)
{
	case 'square':
	{
		$a = floatval(readline());
		printf("%.3f", $a*$a);
	};
		break;
	case 'rectangle':
	{
		$a = floatval(readline());
		$b = floatval(readline());
		printf("%.3f", $a*$b);
	};
		break;
	case 'circle':
	{
		$a = floatval(readline());
		printf("%.3f", pi()*$a*$a);
	};
		break;
	case 'triangle':
	{
		$a = floatval(readline());
		$b = floatval(readline());
		printf("%.3f", 1/2*($a*$b));
	};
		break;
}
?>