<?php
$num = intval(readline());

$flour = 0;
$eggs = 0;
$sugar = 0;

for($i = 1; $i <= $num; $i++)
{
	while(true)
	{
		$prod = readline();
		
		if($prod == 'Bake!')
		{
			if($flour == 1 && $eggs == 1 && $sugar == 1)
			{
				echo 'Baking batch number '.$i.'...'.PHP_EOL;
				$flour = 0;
				$eggs = 0;
				$sugar = 0;
				break;
			}
			else echo 'The batter should contain flour, eggs and sugar!'.PHP_EOL;
		}
		
		if($prod == 'flour') $flour = 1;
		else if($prod == 'eggs') $eggs = 1;
		else if($prod == 'sugar') $sugar = 1;
	}
}
?>