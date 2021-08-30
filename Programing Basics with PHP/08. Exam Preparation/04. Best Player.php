<?php
$best_player = '';
$max_goals = 0;

while(true)
{
	$player = readline();
	
	if($player == 'END') break;
	
	$goals = intval(readline());
	
	if($goals >= 10)
	{
		$best_player = $player;
		$max_goals = $goals;
		break;
	}
	else if($goals > $max_goals)
	{
		$best_player = $player;
		$max_goals = $goals;
	}
}

echo $best_player.' is the best player!'.PHP_EOL;
if($max_goals >= 3) echo 'He has scored '.$max_goals.' goals and made a hat-trick !!!';
else echo 'He has scored '.$max_goals.' goals.';
?>