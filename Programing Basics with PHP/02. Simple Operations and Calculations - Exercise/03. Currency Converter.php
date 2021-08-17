<?php
$money = floatval(150.35);
$c_input = "USD";
$c_output = "EUR";

$c_bgn = 1;
$c_usd = 1.79549;
$c_eur = 1.95583;
$c_gbp = 2.53405;

switch($c_input)
{
	case "BGN": $c_inputx = $money * $c_bgn; break;
	case "USD": $c_inputx = $money * $c_usd; break;
	case "EUR": $c_inputx = $money * $c_eur; break;
	case "GBP": $c_inputx = $money * $c_gbp; break;
}

switch($c_output)
{
	case "BGN": $c_outputx = $c_bgn; break;
	case "USD": $c_outputx = $c_usd; break;
	case "EUR": $c_outputx = $c_eur; break;
	case "GBP": $c_outputx = $c_gbp; break;
}

$converted = $c_inputx / $c_outputx;

printf("%.2f", $converted);
?>