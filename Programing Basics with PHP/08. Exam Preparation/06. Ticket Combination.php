<?php
$comb = intval(readline());
$count = 0;

for($i = ord('B'); $i <= ord('L'); $i += 2)
	for ($j = ord('f'); $j >= ord('a'); $j--)
		for ($k = ord('A'); $k <= ord('C'); $k++)
			for ($l = 1; $l <= 10; $l++)
				for ($m = 10; $m >= 1; $m--)
				{
					$count++;
					if($count == $comb)
					{
						echo 'Ticket combination: '.chr($i).chr($j).chr($k).$l.$m.PHP_EOL;
						echo 'Prize: '.($i + $j + $k + $l + $m).' lv.';
					}
				}
?>