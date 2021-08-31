<?php
$sushi_type = readline();
$rest_name = readline();
$port_num = intval(readline());
$order = readline();

$sashimi = 0;
$maki = 0;
$uramaki = 0;
$temaki = 0;
$isvalid = true;

switch($rest_name)
{
	case 'Sushi Zone':
	{
		$sashimi = 4.99;
		$maki = 5.29;
		$uramaki = 5.99;
		$temaki = 4.29;
	} break;
	case 'Sushi Time':
	{
		$sashimi = 5.49;
		$maki = 4.69;
		$uramaki = 4.49;
		$temaki = 5.19;
	} break;
	case 'Sushi Bar':
	{
		$sashimi = 5.25;
		$maki = 5.55;
		$uramaki = 6.25;
		$temaki = 4.75;
	} break;
	case 'Asian Pub':
	{
		$sashimi = 4.50;
		$maki = 4.80;
		$uramaki = 5.50;
		$temaki = 5.50;
	} break;
	default: $isvalid = false;
}

switch($sushi_type)
{
	case 'sashimi': $total = $sashimi * $port_num; break;
	case 'maki': $total = $maki * $port_num; break;
	case 'uramaki': $total = $uramaki * $port_num; break;
	case 'temaki': $total = $temaki * $port_num; break;
}

if($order == 'Y') $total += ($total * 0.20);
$total = ceil($total);

if($isvalid) echo 'Total price: '.$total.' lv.';
else echo $rest_name.' is invalid restaurant!';
?>