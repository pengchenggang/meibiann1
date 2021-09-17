<?php session_start(); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>设计导航左侧</title>
<style>
body{ background-color:#f4f4f4; padding-right:30px; margin:0; padding:0; border:0;}
h1 { font-family:微软雅黑,Arial, Verdana, sans-serif; font-size:44px; margin:50px 0 10px 50px; display:block; font-weight:normal;}
a { color:#333; padding:5px; padding-left:75px; text-decoration:none; font-family:微软雅黑; display:block;}
a:hover { background-color:#FFF;}
.curr , a.curr:hover { background-color:#CCC; }

.naviDiv { font-size:18px;margin-top:10px;}
.naviDiv a { background-image:url(images/leftIcon.png); background-repeat:no-repeat;}

.qqLogin { font-size:12px; padding-left:75px; line-height:30px; margin-top:15px;}

.doBtn { margin:0; padding:0;}
.doBtn:hover { background-color:transparent;}

#dsBtn { font-size:12px; color:#6D6D6D;background-image:none; padding:0 4px; margin:0 0 0 6px; float:left; height:25px; line-height:25px; cursor:pointer;}
</style>

<script language="javascript">
function dothis(myLink)
{
	document.getElementById("n01").className = "";
	document.getElementById("n02").className = "";
	document.getElementById("n03").className = "";
	document.getElementById("n08").className = "";
	document.getElementById("n09").className = "";
	document.getElementById("n10").className = "";
	document.getElementById("n11").className = "";
	document.getElementById("n12").className = "";
	myLink.className = "curr";
}
</script>

<!--
<script src="http://tj.house.sina.com.cn/images/tjzhuantiNew/201303/searchmodule/jquery-1.6.2.js" type="text/javascript" charset="utf-8"></script>


<link href="http://tj.house.sina.com.cn/images/tjzhuantiNew/201303/searchmodule/jquery-ui-1.10.0.custom.css" rel="stylesheet">
<script src="http://tj.house.sina.com.cn/images/tjzhuantiNew/201303/searchmodule/jquery-ui-1.10.0.custom.js"></script>
 ***自动完成组件
    
  
  <script>
  //编码转换函数 encodeURIComponent(request.term)
	$(function() {
		$( "#searchipt" ).autocomplete({ 
			source: function(request, response) {
				//alert(encodeURIComponent(request.term));
        $.ajax({
            url: "http://data.house.sina.com.cn/api/search_suggest.php?city=tj&q="+encodeURIComponent(request.term),
            dataType: "jsonp",
            data: {
                featureClass: "P",
                style: "full",
                maxRows: 12,
                name_startsWith: request.term
            },
            success: function(data) {
			    response($.map(data, function(item) {
					if(item.length != 1)
                    return {
                        label: item.name,
                        value: item.name
                    }
                }));
				
            }
        });
    },
    minLength: 1
		});
		
		
		
	$("#dsBtn").click(function(){
		$(this).attr("href","http://www.leju.com/?mod=sale_search&act=&keyword="+encodeURIComponent($("#searchipt").val()));
		//alert(encodeURIComponent($("#searchipt").val()));
		//return false;
		
		});	
		
	});
	
	</script>-->
    
    
    <script src="../jquery-1.11.0.min.js"></script>
    
    
    <link href="http://tj.house.sina.com.cn/images/tjzhuantiNew/201303/searchmodule/jquery-ui-1.10.0.custom.css" rel="stylesheet">
<script src="http://tj.house.sina.com.cn/images/tjzhuantiNew/201303/searchmodule/jquery-ui-1.10.0.custom.js"></script>
    <script>
$(document).ready(function(){
	var sTrue = true;
	var inputFocus = false;
	$("#searchipt").focusout(function(){inputFocus = false;});
	$("#searchipt").focus(function(){
		inputFocus = true;
		if(sTrue)
		{
			
			
			//编码转换函数 encodeURIComponent(request.term)
	$(function() {
		$( "#searchipt" ).autocomplete({ 
			source: function(request, response) {
				//alert(encodeURIComponent(request.term));
        $.ajax({
            url: "http://data.house.sina.com.cn/api/search_suggest.php?city=tj&q="+encodeURIComponent(request.term),
            dataType: "jsonp",
            data: {
                featureClass: "P",
                style: "full",
                maxRows: 12,
                name_startsWith: request.term
            },
            success: function(data) {
			    response($.map(data, function(item) {
					if(item.length != 1)
                    return {
                        label: item.name,
                        value: item.name
                    }
                }));
				
            }
        });
    },
    minLength: 1
		});
		
		
		
	$("#dsBtn").click(function(){
		$(this).attr("href","http://www.leju.com/?mod=sale_search&act=&keyword="+encodeURIComponent($("#searchipt").val()));
		//alert(encodeURIComponent($("#searchipt").val()));
		//return false;
		
		});	
		
	});
			
			
			
			sTrue = false;
		}
		
	});
	
	
	
	
	
	

					$(document).keyup(function(event){
						
						  switch(event.keyCode) {
							case 90:
								//状态1：正常显示全部
								mIdStat = $("#mId",window.parent.document).attr("cols");
								if(mIdStat == "300,*")
								{
									if(inputFocus == false)
									{
										$("#mId",window.parent.document).attr("cols","0,*");
									}
								}
								else
								{
									if(inputFocus == false)
									{
										$("#mId",window.parent.document).attr("cols","300,*");
									}
									
								}
								
							  break;
						  }//switch
						  
					
					});//keydown
});
</script>


</head>

<body>
<h1 mel="美编N1"><img src="images/meibiann1logo.png" width="160" height="63"  alt=""/></h1>
<div style="color:#6D6D6D; font-size:12px; line-height:20px; margin-left:50px;">更好更快的寻找创意 Beta 1.0<br />m.zzcn.net

  <br />
<span style="color:#CCC;">快捷键Z：隐藏/显示左侧导航栏</span></div>

<div class="naviDiv" style="margin-top:30px; padding-left:50px;">
<!-- accept-charset="utf-8" -->
<form action="http://data.house.sina.com.cn/tj/search/" method="get" target="_blank" accept-charset="gb2312">
<input type="text" autocomplete="off" style="width:160px; float:left;" value="" class="txt" adsdefault="true" name="keyword" id="searchipt">
<a id="dsBtn" href="#" target="_blank">电商</a></form>

</div>
<div style="clear:both;"></div>
<div class="naviDiv"><a style="background-position:45px -175px;" href="/jSearch/" id="n12" target="mainFrame" onclick="javascript:dothis(this);">N1搜索<span style="font-size:9px; color:#900;"> New!</span></a></div>
<div class="naviDiv"><a style="background-position:45px 0;" class="curr" href="main2.html" id="n03" target="mainFrame" onclick="javascript:dothis(this);">新浪乐居</a></div>
<div class="naviDiv"><a style="background-position:45px -35px;" href="main8.html" id="n08" target="mainFrame" onclick="javascript:dothis(this);">专题总结</a></div>
<div class="naviDiv"><a style="background-position:45px -70px;" href="main3.html" id="n01" target="mainFrame" onclick="javascript:dothis(this);">设计灵感</a></div>
<div class="naviDiv"><a style="background-position:45px -210px;" href="main10.html" id="n10" target="mainFrame" onclick="javascript:dothis(this);">资源推荐</a></div>
<div class="naviDiv"><a style="background-position:45px -245px;" href="main12.html" id="n11" target="mainFrame" onclick="javascript:dothis(this);">展架推荐</a></div>
<div class="naviDiv"><a style="background-position:45px -105px;" href="main1.html" id="n02" target="mainFrame" onclick="javascript:dothis(this);">平板图标</a></div>
<div class="naviDiv"><a style="background-position:45px -140px;" href="main9.html" id="n09" target="mainFrame" onclick="javascript:dothis(this);">视频赏析</a></div>

<!--
<div class="naviDiv"><a style="background-position:45px -175px;" href="http://sinaleju.sinaapp.com/fs/index.html" id="fs" target="_blank">分数统计</a></div>
-->


<div class="qqLogin">
<?php

if($_GET["do"] == "exit")
{
	unset($_SESSION['qqName']);
}

if(isset($_SESSION["qqName"]))
{
	echo '<div style="height:100px; width:100px; background-image:url('.$_SESSION["face100"].');"><img src="images/lk100.png" width="100" height="100"  alt=""/></div>';
	echo "欢迎你：".$_SESSION["qqName"]. " <a href='?do=exit' class='doBtn'>退出</a>";
}
else
{
	echo '<br /><a href="/qqsdk/oauth/qq_login.php" style="padding:0;maring:0; width:120px;" target="_parent"><img src="/qqsdk/img/qq_login.png"></a>';
}

?>
</div>


</body>
</html>
