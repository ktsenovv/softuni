<?php
$n1 = intval(readline());
$n2 = intval(readline());

for($i = $n1; $i <= $n2; $i++)
{
    $x1 = floor($i / 100000) % 10;
    $x2 = floor($i / 10000) % 10;
    $x3 = floor($i / 1000) % 10;
    $x4 = floor($i / 100) % 10;
    $x5 = floor($i / 10) % 10;
    $x6 = $i % 10;
    $evenSum = $x1 + $x3 + $x5;
    $oddSum = $x2 + $x4 + $x6;
    if($evenSum == $oddSum) echo $i.' ';
}
?>