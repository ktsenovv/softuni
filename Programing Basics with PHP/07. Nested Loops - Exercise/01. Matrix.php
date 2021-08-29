<?php
$a = intval(readline());
$b = intval(readline());
$c = intval(readline());
$d = intval(readline());

for($frfn = $a; $frfn <= $b; $frfn++)
	for($frsn = $a; $frsn <= $b; $frsn++)
		for($srfn = $c; $srfn <= $d; $srfn++)
			for($srsn = $c; $srsn <= $d; $srsn++)
			{
				if(($frfn + $srsn) == ($frsn + $srfn) && ($frfn != $frsn) && ($srfn != $srsn))
				{
					echo $frfn.$frsn.PHP_EOL;
					echo $srfn.$srsn.PHP_EOL;
					echo PHP_EOL;
				}
			}
?>