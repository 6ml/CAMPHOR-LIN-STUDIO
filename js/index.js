window.onload=function(){

	var GetElementsByClassName = function(parentNodeName,className,TagName,level,bool){
		var classArray = new Array();
		var level1 = new Array();
		var level2 = new Array();
		var level3 = new Array();
		if(document.getElementsByClassName){
			return document.getElementsByClassName(className);
		}
		else{
			if(bool==true){
				parentNodeName = document.getElementById(parentNodeName);
				classArray[0] = parentNodeName.firstChild;
				i=0;
				while(classArray[i].nextSibling!=null||classArray[i].parentNode!=parentNodeName){
					classArray[i+1]=classArray[i].nextSibling;
					i++;
				}
				return classArray;
			}
			else{
				var l=0;
				var m=0;
				var n=0;
				parentNodeName = document.getElementById(parentNodeName);
				
				level1 = parentNodeName.childNodes;
				if(level==1){
					for(var k=0;k<level1.length;k++){
						if(level1[k].tagName==TagName){
							classArray[n]=level1[k];
							n++;
						}
					}
					return classArray;
				}
				else{
					for(var i=0;i<level1.length;i++){
						for(var j=0;j<level1[i].childNodes.length;j++){
							if(level1[i].childNodes[j].tagName!=null){
								level2[l] = level1[i].childNodes[j];
								l++;
							}
						}
					}
					if(level==2){
						for(var k=0;k<level2.length;k++){
							if(level2[k].tagName==TagName){
								classArray[n]=level2[k];
								n++;
							}
						}
						return classArray;
					}
					else{
						for(var i=0;i<level2.length;i++){
							for(var j=0;j<level2[i].childNodes.length;j++){
								if(level2[i].childNodes[j].tagName!=null){
									level3[m] = level2[i].childNodes[j];
									m++;
								}
							}
						}
						if(level==3){
							for(var k=0;k<level3.length;k++){
								if(level3[k].tagName==TagName){
									classArray[n]=level3[k];
									n++;
								}
							}
							return classArray;
						}
					}
				}
			}
		}
	}
	var addEvent = function(obj,event,fn){
		if(obj.addEventListener){
			obj.addEventListener(event,fn);
		}
		else if(obj.attachEvent){
			obj.attachEvent('on'+event,fn);
		}
	}

	var turnsimg=GetElementsByClassName('timgbox','turnsimg','LI',1,true);
	var turnsnav=GetElementsByClassName('tnavbox','turnsnav','DIV',1,true);
	var first_level=GetElementsByClassName('first_level_box','first_level','LI',1,true);
	var second_level=GetElementsByClassName('first_level_box','second_level','UL',2,false);
	var busimgbox=GetElementsByClassName('busimg_box','busimgbox','DIV',3,false);
	var title_li=GetElementsByClassName('first_level_box','title_li','A',2,false);
	var paging=GetElementsByClassName('content','paging','DIV',1,true);

	
	var busimg_web=document.getElementById('busimg_web');
	var busimg_app=document.getElementById('busimg_app');
	var busimg_design=document.getElementById('busimg_design');
	var autoflag=0;
	var timer;

	for(var i=0;i<title_li.length;i++){
		title_li[i].id=i;
		addEvent(title_li[i],'click',function(){changepaging(this.id);});
	}
	function changepaging(obj){
		for(var j=0;j<paging.length;j++){
			paging[j].style.display='none';
			paging[j].style.opacity=0.5;
		}
		paging[obj].style.display='block';
		startMove(paging[obj],{'opacity':100},20);
	}	

	for(var i=0;i<turnsnav.length;i++){
		turnsnav[i].id=i;
		addEvent(turnsnav[i],'click',function(){changeturns(this.id);});
	}
	function changeturns(obj){  //鼠标点击切换图片
		clearInterval(timer);
		for(var i=0;i<turnsimg.length;i++){
			turnsimg[i].style.display = 'none';
			turnsnav[i].style.backgroundColor='#c9c9c9';
		}
		turnsimg[obj].style.display = 'block';
		startMove(turnsimg[obj],{'opacity':100},30);
		turnsnav[obj].style.backgroundColor='#FF7F47';
		autoflag = obj;
		timer=setInterval(changeturnsauto,3000);
	}

	function changeturnsauto(){  //自动轮播
		if(autoflag!=turnsimg.length-1){
			autoflag++;
		}
		else  autoflag=0;
		for(var i=0;i<turnsimg.length;i++){
			turnsimg[i].style.display = 'none';
			// startMove(turnsimg[i],{'opacity':50},20);
			turnsimg[i].style.opacity = 0.5;
			turnsnav[i].style.backgroundColor='#c9c9c9';
		}
		turnsimg[autoflag].style.display = 'block';
		turnsnav[autoflag].style.backgroundColor='#FF7F47';
		startMove(turnsimg[autoflag],{'opacity':100},30);
	}
	timer=setInterval(changeturnsauto,3000);

	for(var i=0;i<first_level.length;i++){  //滑出二级菜单
		first_level[i].id=i;
		addEvent(first_level[i],'mouseover',function(){secondshow(this.id);});
	}
	function secondshow(obj){
		startMove(second_level[obj],{'height':250},3);
	}
	for(var i=0;i<first_level.length;i++){
		first_level[i].id=i;
		addEvent(first_level[i],'mouseout',function(){secondhide(this.id);});
	}
	function secondhide(obj){
		startMove(second_level[obj],{'height':0},3);
	}

	addEvent(busimgbox[0],'mouseover',function(){busimg_web.src='images/webdevelopfoucs.png'});
	addEvent(busimgbox[0],'mouseout',function(){busimg_web.src='images/webdevelop.png'});
	addEvent(busimgbox[1],'mouseover',function(){busimg_app.src='images/appfoucs.png'});
	addEvent(busimgbox[1],'mouseout',function(){busimg_app.src='images/app.png'});
	addEvent(busimgbox[2],'mouseover',function(){busimg_design.src='images/designfoucs.png'});
	addEvent(busimgbox[2],'mouseout',function(){busimg_design.src='images/design.png'});
}