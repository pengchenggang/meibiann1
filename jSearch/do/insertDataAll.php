<?php
/*
$mysql = new SaeMysql();
//$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '标题测试' , '描述文字内容' , 'ceshibiaoti' , 'images/k.jpg' , '彭成刚' ) ";
//$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '".$_POST["title"]."' , '".$_POST["ms"]."' , '".$_POST["hidekey"]."' , '".$_POST["src"]."' , '".$_POST["who"]."' ) ";

//$dataAll = $_POST["dataAll"];


$mysql->runSql( $sql );
if( $mysql->errno() != 0 )
{
    die( "Error:" . $mysql->errmsg() );
} 
$mysql->closeDb();
*/

/*
$txt = "标题All|标题All描述|biaotiAll|images/dataAll.jpg|彭成刚";
$dataAll = explode("|",$txt);
$mysql = new SaeMysql();
$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '".$dataAll[0]."' , '".$dataAll[1]."' , '".$dataAll[2]."' , '".$dataAll[3]."' , '".$dataAll[4]."' ) ";
$mysql->runSql( $sql );
if( $mysql->errno() != 0 )
{
    die( "Error:" . $mysql->errmsg() );
} 
$mysql->closeDb();

//foreach($dataAll as $value){}

*/

/*
$k = $_POST["k"];
$dataAll = explode("\r\n",$k);

foreach($dataAll as $value){
	echo $value . "<br>";
	}
*/

/*
$k = $_POST["k"];
$dataAll = explode("\r\n\r\n",$k);

foreach($dataAll as $data){
	//echo $value . "<br>";
	$dataOne = explode("\r\n",$data);
	echo "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '".$dataOne[0]."' , '".$dataOne[1]."' , '".$dataOne[2]."' , '".$dataOne[3]."' , '".$dataOne[4]."' ) ";
	echo "<br>";
}
*/

$mysql = new SaeMysql();

$k = $_POST["k"];
$dataAll = explode("\r\n\r\n",$k);

foreach($dataAll as $data){
	//echo $value . "<br>";
	$dataOne = explode("\r\n",$data);
	$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '".$dataOne[0]."' , '".$dataOne[1]."' , '".$dataOne[2]."' , '".$dataOne[3]."' , '".$dataOne[4]."' ) ";
	$mysql->runSql( $sql );
	if( $mysql->errno() != 0 ){die( "Error:" . $mysql->errmsg() );} 
	//echo $mysql . "<br>";
}

$mysql->closeDb();

?>