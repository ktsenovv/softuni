<?php
$sbook = readline();
$capacity = intval(readline());

$count = 0;

while(true)
{
	$search = readline();
	if($search == $sbook)
	{
		echo 'You checked '.$count.' books and found it.';
		break;
	}
	else if($capacity == $count)
	{
		echo 'The book you search is not here!'.PHP_EOL;
		echo 'You checked '.$count.' books.';
		break;
	}
	$count++;
}
?>