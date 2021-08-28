<?php
$floors = intval(readline());
$rooms = intval(readline());

for($i = $floors; $i > 0; $i--)
{
	for($j = 0; $j < $rooms; $j++)
		echo ($i == $floors ? 'L' : ($i % 2 == 0 ? 'O' : 'A')).$i.$j.' ';
	echo PHP_EOL;
}
?>