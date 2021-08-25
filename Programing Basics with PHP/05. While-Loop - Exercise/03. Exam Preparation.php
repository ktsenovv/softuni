<?php
$max_br = intval(readline());

$average_rate = 0;
$bad_rates = 0;
$tasks = 0;

while(true)
{
	$task_name = readline();
	
	if($task_name == 'Enough')
	{
		$average_rate /= $tasks;
		printf('Average score: %.2f'.PHP_EOL, $average_rate);
		echo 'Number of problems: '.$tasks.PHP_EOL;
		echo 'Last problem: '.$last_task;
		break;
	}
	
	$task_rate = intval(readline());
	
	if($task_rate <= 4) $bad_rates++;
	
	$average_rate += $task_rate;
	$tasks++;
	$last_task = $task_name;
	
	if($max_br <= $bad_rates)
	{
		echo 'You need a break, '.$bad_rates.' poor grades.';
		break;
	}
}
?>