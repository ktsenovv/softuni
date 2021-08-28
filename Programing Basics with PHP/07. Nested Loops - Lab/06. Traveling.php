<?php
while(true)
{
	$dest = readline();
	
	if($dest == 'End') break;
	
	$budget = floatval(readline());
	$budget_cur = 0;
	while($budget_cur < $budget)
	{
		$money = floatval(readline());
		$budget_cur += $money;
	}
	echo 'Going to '.$dest.'!'.PHP_EOL;
}
?>