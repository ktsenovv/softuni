<?php
$n1 = intval(readline());
$n2 = intval(readline());
$op = readline();

switch($op)
{
	case '+': printf('%d %s %d = %d - %s', $n1, $op, $n2, $n1 + $n2, (($n1 + $n2) % 2 == 0) ? $eo = 'even' : $eo = 'odd'); break;
	case '-': printf('%d %s %d = %d - %s', $n1, $op, $n2, $n1 - $n2, (($n1 - $n2) % 2 == 0) ? $eo = 'even' : $eo = 'odd'); break;
	case '*': printf('%d %s %d = %d - %s', $n1, $op, $n2, $n1 * $n2, (($n1 * $n2) % 2 == 0) ? $eo = 'even' : $eo = 'odd'); break;
	case '/':
	{
		if($n2 == 0) echo 'Cannot divide '.$n1.' by zero';
		else printf('%d %s %d = %.2f', $n1, $op, $n2, $n1 / $n2);
	} break;
	case '%':
	{
		if($n2 == 0) echo 'Cannot divide '.$n1.' by zero';
		else printf('%d %s %d = %d', $n1, $op, $n2, $n1 % $n2);
	} break;
}
?>