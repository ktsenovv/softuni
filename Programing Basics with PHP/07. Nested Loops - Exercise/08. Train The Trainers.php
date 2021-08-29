<?php
$judges = intval(readline());

$presScoreTotal = 0;
$counter = 0;

while(true)
{
	$pres = readline();
	
	$presScore = 0;
	if($pres == "Finish")
	{
		$scoreSum = $presScoreTotal / $counter;
		printf("Student's final assessment is %.2f.", $scoreSum);
		break;
	}
	for($i = 0; $i < $judges; $i++)
	{
		$score = floatval(readline());
		$presScore += $score;
		$presScoreTotal += $score;
		$counter++;
	}
	printf("%s - %.2f.".PHP_EOL, $pres, $presScore / $judges);
}
?>