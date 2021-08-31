<?php
$num = intval(readline());

$num = (string) $num;

for($i = 1; $i <= intval($num[2]); $i++)
    for($j = 1; $j <= intval($num[1]); $j++)
        for($k = 1; $k <= intval($num[0]); $k++)
            echo $i.' * '.$j.' * '.$k.' = '.($i*$j*$k).';'.PHP_EOL;
?>