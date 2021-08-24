<?php
$n = intval(readline());
while($n < 1 || $n > 100)
{
	echo 'Invalid number!';
	$n = intval(readline());
}
echo 'The number is '.$n;
?>