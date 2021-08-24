<?php
$input = intval(readline());

$numbers = [];

while($input != 'END')
{
	$numbers[] = $input;
	$input = intval(readline());
}

echo 'Max number: '.max($numbers).PHP_EOL;
echo 'Min number: '.min($numbers);
?>