<?php
$whiskey_ppl = floatval(readline());
$beer_q = floatval(readline());
$wine_q = floatval(readline());
$rakia_q = floatval(readline());
$whiskey_q = floatval(readline());

$rakia_ppl = $whiskey_ppl / 2;
$wine_ppl = $rakia_ppl - (0.4 * $rakia_ppl);
$beer_ppl = $rakia_ppl - (0.8 * $rakia_ppl);

$rakia_tp = $rakia_q * $rakia_ppl;
$wine_tp = $wine_q * $wine_ppl;
$beer_tp = $beer_q * $beer_ppl;
$whiskey_tp = $whiskey_q * $whiskey_ppl;
$total = $rakia_tp + $wine_tp + $beer_tp + $whiskey_tp;

printf("%.2f", $total);
?>