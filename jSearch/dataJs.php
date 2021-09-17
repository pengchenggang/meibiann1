<?php
header('Content-Type:text/html;charset=utf-8');
function ggo( $str )
{
	$ggStr = addcslashes($str,"'");
	$ggStr = addcslashes($ggStr,"\"");
	$ggStr = addcslashes($ggStr,"\n");
	return $ggStr;
}
$mysql = new SaeMysql();
$sql = "select * from n1search where oDel = 0 order by id desc";
$data = $mysql->getData( $sql );
$out = 'var eArr = {' . "\n";
foreach($data as $value)
{
	//$out += 'd' . $value["id"] . ':{';
	$out = $out . '\'d' . ggo($value["id"]) . '\':{' . "\n";
	$out = $out . '"title":\'' . ggo($value["title"]) . '\',' . "\n";
	$out = $out . '"ms":\'' . ggo($value["ms"]) . '\',' . "\n";
	$out = $out . '"hidekey":\'' . ggo($value["hidekey"]) . '\',' . "\n";
	$out = $out . '"src":"' . ggo($value["src"]) . '",' . "\n";
	$out = $out . '"who":\'' . ggo($value["who"]) . '\'' . "\n";
	$out = $out . '},' . "\n";
}
$mysql->closeDb();
echo $out . '};';
?>