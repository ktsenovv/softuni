<?php
$guestp_money = intval(readline());

$money = 0;
$people = 0;

while(true)
{
	$people_num = readline();
	
	if($people_num == 'The restaurant is full') break;
	
	$people += $people_num;
	
	if($people_num < 5) $money += $people_num * 100;
	else if($people_num >= 5) $money += $people_num * 70;
}

if($money >= $guestp_money) echo 'You have '.$people.' guests and '.($money - $guestp_money).' leva left.';
else if($money < $guestp_money) echo 'You have '.$people.' guests and '.$money.' leva income, but no singer.';
?>