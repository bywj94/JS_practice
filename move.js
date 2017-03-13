function getStyle(obj,name){   //获取非行间样式
		if(obj.currentStyle){
			return obj.currentStyle[name];
		}
		else{
			return getComputedStyle(obj,false)[name];
		
		}
	}

	function startMove(obj,json,fnEnd){  //运动框架
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var bStop=true;   //假设所有的值都到了
			for(var kind in json){
			var cur=0;
			if(kind=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj,kind))*100);
			}else{
				cur=parseInt(getStyle(obj,kind))
			}
			var speed=(json[kind]-cur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

				if(cur!=json[kind]){
					bStop=false;
				}
			
				if(kind=='opacity'){
					obj.style.filter='alpha(opacity:'+(speed+cur)+')';
					obj.style.opacity=(cur+speed)/100;
				}else{
					obj.style[kind]=cur+speed+'px';
				}	
			
			}
			if(bStop){
				clearInterval(obj.timer);
				if(fnEnd){fnEnd();}
			}

		},30);
	}