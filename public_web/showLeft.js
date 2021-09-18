$(document).ready(function(){
	//z 是 90 tab 是9
					var stat = 1;
					$(document).keyup(function(event){
						
						  switch(event.keyCode) {
							case 90:
								//状态1：正常显示全部
								mIdStat = $("#mId",window.parent.document).attr("cols");
								if(mIdStat == "300,*")
								{
										$("#mId",window.parent.document).attr("cols","0,*");
										stat = 2;
								}
								else
								{
										$("#mId",window.parent.document).attr("cols","300,*");
										stat = 1;
								}
							  break;
						  }//switch
						  
					
					});//keydown

});