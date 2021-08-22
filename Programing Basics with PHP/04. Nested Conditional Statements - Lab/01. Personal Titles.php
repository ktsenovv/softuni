<?php
$age = floatval(readline());
$gender = readline();

if($age < 16)
{
	if($gender == "m") echo "Master";
	else if($gender == "f") echo "Miss";
}
else
{
	if($gender == "m") echo "Mr.";
	else if($gender == "f") echo "Ms.";
}
?>