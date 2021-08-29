<?php
$n = intval(readline());
$o = intval(readline());

for($i = 1; $i < $n; $i++)
	for($j = 1; $j < $n; $j++)
		for($k = ord('a'); $k < ord('a') + $o; $k++)
			for($l = ord('a'); $l < ord('a') + $o; $l++)
				for($m = 1; $m <= $n; $m++)
					if(($m > $i) && ($m > $j))
						echo $i.$j.chr($k).chr($l).$m.' ';
?>