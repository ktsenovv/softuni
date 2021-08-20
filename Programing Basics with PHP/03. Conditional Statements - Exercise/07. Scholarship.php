<?php
$dohod = floatval(readline());
$uspeh = floatval(readline());
$minimalna_zaplata = floatval(readline());

$socialna_stipendiq = $minimalna_zaplata * 0.35;
$otlichna_stipendiq = $uspeh * 25;

if($uspeh > 4.50)
{
	if($uspeh < 5.50)
	{
		if($dohod <= $minimalna_zaplata) echo "You get a Social scholarship ".floor($socialna_stipendiq)." BGN";
		else echo "You cannot get a scholarship!";
	}
	else
	{
		if($dohod <= $minimalna_zaplata)
		{
			if($socialna_stipendiq > $otlichna_stipendiq) echo "You get a Social scholarship ".floor($socialna_stipendiq)." BGN";
			else echo "You get a scholarship for excellent results ".floor($otlichna_stipendiq)." BGN";
		}
		else echo "You get a scholarship for excellent results ".floor($otlichna_stipendiq)." BGN";
	}
}
else echo "You cannot get a scholarship!";
?>