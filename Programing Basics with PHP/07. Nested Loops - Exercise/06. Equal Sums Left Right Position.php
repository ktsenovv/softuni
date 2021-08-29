<?php
$n1 = intval(readline());
$n2 = intval(readline());

for($i = $n1; $i <= $n2; $i++)
{
    $x1 = floor($i / 10000) % 10;
    $x2 = floor($i / 1000) % 10;
    $x3 = floor($i / 100) % 10;
    $x4 = floor($i / 10) % 10;
    $x5 = $i % 10;
    $leftSum = $x1 + $x2;
    $rightSum = $x4 + $x5;
    if($leftSum == $rightSum) echo $i.' ';
	else if(min($leftSum, $rightSum) + $x3 == max($leftSum, $rightSum)) echo $i.' ';
}
?>