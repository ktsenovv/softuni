<?php
$n = intval(readline());
$m = intval(readline());
$s = intval(readline());

for($i = $m; $i >= $n; $i--)
{
	if($i % 2 == 0 && $i % 3 == 0)
	{
		if($i == $s) break;
		echo $i.' ';
	}
}
?>