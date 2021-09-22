<?php
header('Content-Type:text/html;charset=utf-8');

//给单引号加\ 作用是字符串外侧是单引号用的
//总结：json 外侧是单引号的，字符串里面 单引号 和 双引号 都需要转义字符
//josn 外侧是双引号的，字符串里面 只需要给 双引号 加转义字符
//上面说的是出库的时候，入库的时候 还是 单引号和双引号 一起转义字符靠谱
function gg( $str )
{
	$ggStr = addcslashes($str,"'");
	$ggStr = addcslashes($ggStr,"\"");
	$ggStr = addcslashes($ggStr,"\n");
	return $ggStr;
}
//给双引号加\ 作用是字符串外侧是双引号用的
function ggo( $str )
{
	//$str = addcslashes($str,"'");
	$str = addcslashes($str,"\"");
	$str = addcslashes($str,"\n");
	return $str;
	//return addslashes($str);
	//$ggoStr = addcslashes($str,'"');
	//$ggoStr = str_replace("'","\\\\\\'",$str);
	//$ggoStr = str_replace("'"," danyinhao ",$str);
	//$ggoStr = str_replace("\""," shuangyinhao ",$str);
}
function n1Log( $n1LogStr )
{
	$mysql = new SaeMysql();
	$n1LogStr = date("Y-m-d H:i:s") . " " .gg($_COOKIE['n1Xingming'])." ". $n1LogStr;
	$sql = "insert into n1Log ( id , logStr ) values ( NULL , '".$n1LogStr."' ) ";
	$mysql->runSql( $sql );
	if( $mysql->errno() != 0 ){die( "Error:" . $mysql->errmsg() );} 
	$mysql->closeDb();
}

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

/*
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
*/

//登录动作
if($_POST["doAction"] == "doLogin")
{
	$mysql = new SaeMysql();
	$sql = "select id,n1Name,n1Pass,n1Xingming from n1User where n1Name = '".gg($_POST["loginName"])."'";
	$data = $mysql->getData( $sql );
	$mysql->closeDb();
	if(1 == count($data) and md5($_POST["loginPass"]) == md5($data[0]["n1Pass"]))
	{//登录成功
		setcookie('n1Id',$data[0]["id"],time()+36002430,"/");
		setcookie('n1Name',$data[0]["n1Name"],time()+36002430,"/");
		setcookie('n1Pass',md5($data[0]["n1Pass"]),time()+36002430,"/");
		setcookie('n1Xingming',$data[0]["n1Xingming"],time()+36002430,"/");
		//echo $_COOKIE['n1Xingming'];
		//echo $data[0]["id"] .":". $data[0]["n1Name"] .":". $data[0]["n1Pass"] .":". $data[0]["n1Xingming"];
		echo '{"login":"true","n1Xingming":"'.$data[0]["n1Xingming"].'"}';
		n1Log("登录了。" );
	}
	else
	{
		echo '{"login":"false","n1Xingming":"err"}';
	}
	//echo count($data);
	//echo "ok" . $_POST["loginName"] . ":" .$_POST["loginPass"];
	//echo $_COOKIE['n1Pass'];
}

//退出动作
if($_POST["doAction"] == "doExit")
{
	n1Log(gg($_COOKIE['n1Xingming'])." 退出了。" );
	setcookie("n1Id", "", time()+36002430,"/");
	setcookie("n1Name", "", time()+36002430,"/");
	setcookie("n1Pass", "", time()+36002430,"/");
	setcookie("n1Xingming", "", time()+36002430,"/");
	echo "{}";
}

//修改用户信息
if($_POST["doAction"] == "doSet")
{
	$mysql = new SaeMysql();
	$sql = "select id,n1Name,n1Pass,n1Xingming from n1User where id = ".$_POST["n1Id"];
	$data = $mysql->getData( $sql );
	
	if(1 == count($data) and md5($_POST["oldLoginPass"]) == md5($data[0]["n1Pass"]))
	{//登录成功 设置用户信息
		
		$sqlset = "UPDATE n1User SET n1Name = '". gg($_POST["oldLoginName"]) ."' WHERE id =" . $_POST["n1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		$sqlset = "UPDATE n1User SET n1Pass = '". gg($_POST["setLoginPass"]) ."' WHERE id =" . $_POST["n1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		setcookie('n1Name',$_POST["oldLoginName"]);
		setcookie('n1Pass',md5($_POST["setLoginPass"]));
		
		n1Log("修改了账号信息");

		echo '{"setStat":"true"}';
	}
	else
	{
		echo '{"setStat":"false"}';
	}
	
	$mysql->closeDb();
}


//n1search 结构 id	title	ms	hidekey	src	who
//添加新数据 需要权限
if($_POST["doAction"] == "doInsert")
{
	$mysql = new SaeMysql();
	$sql = "select id,n1Name,n1Pass,n1Xingming from n1User where id = ".$_POST["n1Id"];
	$data = $mysql->getData( $sql );
	
	if(1 == count($data) and $_POST["n1Pass"] == md5($data[0]["n1Pass"]))
	{//登录成功
		
		$sql = "insert into n1search ( id , title , ms , hidekey , src , who ) values ( NULL , '".gg($_POST["title"])."' , '".gg($_POST["ms"])."' , '".gg($_POST["hidekey"])."' , '".gg($_POST["srcN1"])."' , '".gg($_POST["n1Xingming"])."' ) ";
		$mysql->runSql( $sql );
		if( $mysql->errno() != 0 ){die( '{"setStat":"false","err":"mysqlErrno"}' );} 
		else{echo '{"setStat":"true","err":"ok"}';}
		
		n1Log("添加了一条新数据 标题:".gg($_POST["title"])." 描述:".gg($_POST["ms"])." 拼音：".gg($_POST["hidekey"])." 小图：".gg($_POST["srcN1"]));
		
	}
	else
	{
		echo '{"setStat":"false","err":"noLogin"}';
	}
	$mysql->closeDb();
}


//根据id读取一条记录 不需要权限
if($_POST["doAction"] == "loadOne")
{
	$mysql = new SaeMysql();
	$sql = "select * from n1search where oDel = 0 and id=".$_POST["n1Id"];
	$data = $mysql->getData( $sql );
	if(1 == count($data))
	{
		echo '{"n1Id":"'.ggo($data[0]["id"]).'","modiTitle":"'.ggo($data[0]["title"]).'","modiHidekey":"'.ggo($data[0]["hidekey"]).'","modiSrcN1":"'.ggo($data[0]["src"]).'","modiMs":"'.ggo($data[0]["ms"]).'"}';
	}
	else
	{
		echo '{"n1Id":"err","modiTitle":"err","modiHidekey":"err","modiSrcN1":"err","modiMs":"err"}';
	}
	$mysql->closeDb();
}

//根据名称读取记录 不需要权限
if($_GET["doAction"] == "loadMyList")
{
	$mysql = new SaeMysql();
	$sql = "select * from n1search where oDel = 0 and who='".$_GET["n1Xingming"]."' order by id desc limit ".$_GET["listNum"];
	//$sql = "select * from n1search where oDel = 0 and who='彭成刚'";
	$data = $mysql->getData( $sql );
	$out = 'var myListArr = {' . "\n";
	foreach($data as $value)
	{
		$out = $out . '\'d' . gg($value["id"]) . '\':{' . "\n";
		$out = $out . '"id":\'' . gg($value["id"]) . '\',' . "\n";
		$out = $out . '"title":\'' . gg($value["title"]) . '\',' . "\n";
		$out = $out . '"ms":\'' . gg($value["ms"]) . '\',' . "\n";
		$out = $out . '"hidekey":\'' . gg($value["hidekey"]) . '\',' . "\n";
		$out = $out . '"src":"' . gg($value["src"]) . '",' . "\n";
		$out = $out . '"who":\'' . gg($value["who"]) . '\'' . "\n";
		$out = $out . '},' . "\n";
	}
	echo $out . '};';
	
	$mysql->closeDb();
}

//保存一条记录 需要权限 修改某条记录
//n1search 结构 id	title	ms	hidekey	src	who
if($_POST["doAction"] == "saveOne")
{
	$mysql = new SaeMysql();
	$sql = "select id,n1Name,n1Pass,n1Xingming from n1User where id = ".$_POST["n1Id"];
	$data = $mysql->getData( $sql );
	
	if(1 == count($data) and $_POST["n1Pass"] == md5($data[0]["n1Pass"]))
	{//登录成功
		
		$sql = "select * from n1search where oDel = 0 and id=".$_POST["myN1Id"];
		$data = $mysql->getData( $sql );

		
		$sqlset = "UPDATE n1search SET title = '". gg($_POST["modiTitle"]) ."' WHERE id =" . $_POST["myN1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		$sqlset = "UPDATE n1search SET ms = '". gg($_POST["modiMs"]) ."' WHERE id =" . $_POST["myN1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		$sqlset = "UPDATE n1search SET hidekey = '". gg($_POST["modiHidekey"]) ."' WHERE id =" . $_POST["myN1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		$sqlset = "UPDATE n1search SET src = '". gg($_POST["modiSrcN1"]) ."' WHERE id =" . $_POST["myN1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		
		if( $mysql->errno() != 0 ){die( '{"setStat":"false","err":"mysqlErrno"}' );} 
		else{echo '{"setStat":"true","err":"ok"}';}
		

		$n1LogStr1 = "修改了一条记录。原数据 id:".gg($data[0]["id"])." 标题:".gg($data[0]["title"])." 拼音:".gg($data[0]["hidekey"]);
		$n1LogStr1 = $n1LogStr1 . " 小图:".gg($data[0]["src"])." 描述:".gg($data[0]["ms"]);
		$n1LogStr1 = $n1LogStr1 . " ----------------- 修改新数据为 ";
		$n1LogStr1 = $n1LogStr1 . " 标题:".gg($_POST["modiTitle"])." 拼音:".gg($_POST["modiHidekey"])." 小图:".gg($_POST["modiSrcN1"]);
		$n1LogStr1 = $n1LogStr1 . " 描述:".gg($_POST["modiMs"]);
		n1Log($n1LogStr1);
	}
	else
	{
		echo '{"setStat":"false","err":"noLogin"}';
	}
	$mysql->closeDb();
}


//删除一条记录 需要权限
//n1search 结构 id	title	ms	hidekey	src	who
if($_POST["doAction"] == "delOne")
{
	$mysql = new SaeMysql();
	$sql = "select id,n1Name,n1Pass,n1Xingming from n1User where id = ".$_POST["n1Id"];
	$data = $mysql->getData( $sql );
	
	if(1 == count($data) and $_POST["n1Pass"] == md5($data[0]["n1Pass"]))
	{//登录成功
	
		$sql = "select * from n1search where oDel = 0 and id=".$_POST["myN1Id"];
		$data = $mysql->getData( $sql );//输出log用
		
		$sqlset = "UPDATE n1search SET oDel = 1 WHERE id =" . $_POST["myN1Id"] . " LIMIT 1";
		$mysql ->runSql( $sqlset );
		
		
		if( $mysql->errno() != 0 ){die( '{"setStat":"false","err":"mysqlErrno"}' );} 
		else
		{echo '{"setStat":"true","err":"ok"}';}
		
		$n1LogStr1 = "删除了一条记录。数据为 id:".gg($data[0]["id"])." 标题:".gg($data[0]["title"])." 拼音:".gg($data[0]["hidekey"]);
		$n1LogStr1 = $n1LogStr1 . " 小图:".gg($data[0]["src"])." 描述:".gg($data[0]["ms"]);
		n1Log($n1LogStr1);
	}
	else
	{
		echo '{"setStat":"false","err":"noLogin"}';
	}
	$mysql->closeDb();
}




?>