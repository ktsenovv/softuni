<?php
$country = readline();
$souvenir = strtolower(readline());
$souvenir_num = intval(readline());

$isvalidc = true;
$isvalids = true;
$flags = 0;
$caps = 0;
$posters = 0;
$stickers = 0;

switch($country)
{
	case 'Argentina':
	{
		$flags = 3.25;
		$caps = 7.20;
		$posters = 5.10;
		$stickers = 1.25;
	} break;
	case 'Brazil':
	{
		$flags = 4.20;
		$caps = 8.50;
		$posters = 5.35;
		$stickers = 1.20;
	} break;
	case 'Croatia':
	{
		$flags = 2.75;
		$caps = 6.90;
		$posters = 4.95;
		$stickers = 1.10;
	} break;
	case 'Denmark':
	{
		$flags = 3.10;
		$caps = 6.50;
		$posters = 4.80;
		$stickers = 0.90;
	} break;
	default: $isvalidc = false;
}

switch($souvenir)
{
	case 'flags': $total = $flags * $souvenir_num; break;
	case 'caps': $total = $caps * $souvenir_num; break;
	case 'posters': $total = $posters * $souvenir_num; break;
	case 'stickers': $total = $stickers * $souvenir_num; break;
	default: $isvalids = false;
}

if($isvalidc && $isvalids) printf('Pepi bought %d %s of %s for %.2f lv.', $souvenir_num, $souvenir, $country, $total);
else if(!$isvalidc) echo 'Invalid country!';
else if(!$isvalids) echo 'Invalid stock!';
?>