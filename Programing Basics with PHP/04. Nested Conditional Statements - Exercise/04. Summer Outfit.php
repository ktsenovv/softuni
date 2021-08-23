<?php
$degrees = intval(readline());
$type = strtolower(readline());

if($degrees >= 10 && $degrees <= 18)
{
	switch($type)
	{
		case 'morning': $outfit = 'Sweatshirt'; $shoes = 'Sneakers'; break;
		case 'afternoon': $outfit = 'Shirt'; $shoes = 'Moccasins'; break;
		case 'evening': $outfit = 'Shirt'; $shoes = 'Moccasins'; break;
	}
}
else if($degrees > 18 && $degrees <= 24)
{
	switch($type)
	{
		case 'morning': $outfit = 'Shirt'; $shoes = 'Moccasins'; break;
		case 'afternoon': $outfit = 'T-Shirt'; $shoes = 'Sandals'; break;
		case 'evening': $outfit = 'Shirt'; $shoes = 'Moccasins'; break;
	}
}
else if($degrees >= 25)
{
	switch($type)
	{
		case 'morning': $outfit = 'T-Shirt'; $shoes = 'Sandals'; break;
		case 'afternoon': $outfit = 'Swim Suit'; $shoes = 'Barefoot'; break;
		case 'evening': $outfit = 'Shirt'; $shoes = 'Moccasins'; break;
	}
}

echo "It's $degrees degrees, get your $outfit and $shoes.";
?>