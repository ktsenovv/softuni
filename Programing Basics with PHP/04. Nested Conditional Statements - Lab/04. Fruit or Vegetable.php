<?php
$type = strtolower(readline());

if($type == 'banana' || $type == 'apple' || $type == 'kiwi' || $type == 'cherry' || $type == 'lemon' || $type == 'grapes') echo 'fruit';
else if($type == 'tomato' || $type == 'cucumber' || $type == 'pepper' || $type == 'carrot') echo 'vegetable';
else echo 'unknown';
?>