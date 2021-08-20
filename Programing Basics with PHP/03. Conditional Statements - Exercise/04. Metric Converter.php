<?php
$num = floatval(readline());
$m_input = readline();
$m_output = readline();

$m_m = 1;
$m_mm = 1000;
$m_cm = 100;
$m_mi = 0.000621371192;
$m_in = 39.3700787;
$m_km = 0.001;
$m_ft = 3.2808399;
$m_yd = 1.0936133;

switch($m_input)
{
	case "m": $m_inputx = $num * $m_m; break;
	case "mm": $m_inputx = $num / $m_mm; break;
	case "cm": $m_inputx = $num / $m_cm; break;
	case "mi": $m_inputx = $num / $m_mi; break;
	case "in": $m_inputx = $num / $m_in; break;
	case "km": $m_inputx = $num / $m_km; break;
	case "ft": $m_inputx = $num / $m_ft; break;
	case "yd": $m_inputx = $num / $m_yd; break;
}

switch($m_output)
{
	case "m": $m_outputx = $m_m; break;
	case "mm": $m_outputx = $m_mm; break;
	case "cm": $m_outputx = $m_cm; break;
	case "mi": $m_outputx = $m_mi; break;
	case "in": $m_outputx = $m_in; break;
	case "km": $m_outputx = $m_km; break;
	case "ft": $m_outputx = $m_ft; break;
	case "yd": $m_outputx = $m_yd; break;
}

$converted = $m_inputx * $m_outputx;

printf("%.8f", $converted);
?>