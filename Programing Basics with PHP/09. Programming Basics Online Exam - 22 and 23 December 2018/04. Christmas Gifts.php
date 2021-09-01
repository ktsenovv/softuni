<?php
$kids = 0;
$adults = 0;
$pricet = 0;
$prices = 0;

while(true)
{
	$input = readline();
	
	if($input == 'Christmas') break;
	
	if($input <= 16)
	{
		$pricet += 5;
		$kids++;
	}
	else
	{
		$prices += 15;
		$adults++;
	}
}

echo 'Number of adults: '.$adults.PHP_EOL;
echo 'Number of kids: '.$kids.PHP_EOL;
echo 'Money for toys: '.$pricet.PHP_EOL;
echo 'Money for sweaters: '.$prices;
?>