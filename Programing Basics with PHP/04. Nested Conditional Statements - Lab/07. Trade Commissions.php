<?php
$city = strtolower(readline());
$sells = floatval(readline());

$comission = -1;

if($city == 'sofia')
{
	if($sells >= 0 && $sells <= 500) $comission = 0.05;
	else if($sells > 500 && $sells <= 1000) $comission = 0.07;
	else if($sells > 1000 && $sells <= 10000) $comission = 0.08;
	else if($sells > 10000) $comission = 0.12;
	
	if($sells < 0) echo 'error';
	else printf('%.2f', $sells * $comission);
}
else if($city == 'varna')
{
	if($sells >= 0 && $sells <= 500) $comission = 0.045;
	else if($sells > 500 && $sells <= 1000) $comission = 0.075;
	else if($sells > 1000 && $sells <= 10000) $comission = 0.1;
	else if($sells > 10000) $comission = 0.13;
	
	if($sells < 0) echo 'error';
	else printf('%.2f', $sells * $comission);
}
else if($city == 'plovdiv')
{
	if($sells >= 0 && $sells <= 500) $comission = 0.055;
	else if($sells > 500 && $sells <= 1000) $comission = 0.08;
	else if($sells > 1000 && $sells <= 10000) $comission = 0.12;
	else if($sells > 10000) $comission = 0.145;
	
	if($sells < 0) echo 'error';
	else printf('%.2f', $sells * $comission);
}
else echo 'error';
?>