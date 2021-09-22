<?php
$mysql = new SaeMysql();
//$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '标题测试' , '描述文字内容' , 'ceshibiaoti' , 'images/k.jpg' , '彭成刚' ) ";
$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '".$_POST["title"]."' , '".$_POST["ms"]."' , '".$_POST["hidekey"]."' , '".$_POST["src"]."' , '".$_POST["who"]."' ) ";

$mysql->runSql( $sql );
if( $mysql->errno() != 0 )
{
    die( "Error:" . $mysql->errmsg() );
}
else
{
	echo "ok";
}
$mysql->closeDb();
?>