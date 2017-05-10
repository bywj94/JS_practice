

/*设置框*/
	var oShow=document.getElementById('show');
	var oBtn=document.getElementById('btn');
	var oSet=document.getElementById('set');
	var oDiv=document.getElementById('div1');
	oBtn.onclick=function(){
		oSet.style.display="block";
		oDiv.style.background="#696969";
		oShow.style.background="#696969";
	}



/*设置*/
	
	var oRed=document.getElementById('red');
	var oYellow=document.getElementById('yellow');
	var oBlue=document.getElementById('blue');
	var oTww=document.getElementById('tw-w');
	var oThw=document.getElementById('th-w');
	var oFow=document.getElementById('fo-w');
	var oTwt=document.getElementById('tw-t');
	var oTht=document.getElementById('th-t');
	var oFot=document.getElementById('fo-t');

	/*移入移出换色*/
		/*第一行*/
		oRed.onmouseover=function(){
			this.style.opacity=1;
		}
		oRed.onmouseout=function(){
			this.style.opacity=0.7;
		}
		oYellow.onmouseover=function(){
			this.style.opacity=1;
		}
		oYellow.onmouseout=function(){
			this.style.opacity=0.7;
		}
		oBlue.onmouseover=function(){
			this.style.opacity=1;
		}
		oBlue.onmouseout=function(){
			this.style.opacity=0.7;
		}
		/*第二行*/
		oTww.onmouseover=function(){
			this.style.background="#DAA520";
			this.style.color="black";
		}
		oTww.onmouseout=function(){
			this.style.background="#D3D3D3";
			this.style.color="#696969";
		}
		oThw.onmouseover=function(){
			this.style.background="#DAA520";
			this.style.color="black";
		}
		oThw.onmouseout=function(){
			this.style.background="#D3D3D3";
			this.style.color="#696969";
		}
		oFow.onmouseover=function(){
			this.style.background="#DAA520";
			this.style.color="black";
		}
		oFow.onmouseout=function(){
			this.style.background="#D3D3D3";
			this.style.color="#696969";
		}
		/*第三行*/
		oTwt.onmouseover=function(){
			this.style.background="#DAA520";
			this.style.color="black";
		}
		oTwt.onmouseout=function(){
			this.style.background="#D3D3D3";
			this.style.color="#696969";
		}
		oTht.onmouseover=function(){
			this.style.background="#DAA520";
			this.style.color="black";
		}
		oTht.onmouseout=function(){
			this.style.background="#D3D3D3";
			this.style.color="#696969";
		}
		oFot.onmouseover=function(){
			this.style.background="#DAA520";
			this.style.color="black";
		}
		oFot.onmouseout=function(){
			this.style.background="#D3D3D3";
			this.style.color="#696969";
		}

	/*颜色切换*/
	oRed.onclick=function(){
		oShow.style.background="red";
	}
	oYellow.onclick=function(){
		oShow.style.background="#FFA500";
	}
	oBlue.onclick=function(){
		oShow.style.background="blue";
	}

	/*宽度切换*/
	oTww.onclick=function(){
		oShow.style.width="200px";
	}
	oThw.onclick=function(){
		oShow.style.width="300px";
	}
	oFow.onclick=function(){
		oShow.style.width="400px";
	}

	/*高度切换*/
	oTwt.onclick=function(){
		oShow.style.height="200px";
	}
	oTht.onclick=function(){
		oShow.style.height="300px";
	}
	oFot.onclick=function(){
		oShow.style.height="400px";
	}

	/*恢复 确定*/
	var oR=document.getElementById("recover");
	var oC=document.getElementById("confirm");
	oR.onclick=function(){
		oShow.style.width="100px";
		oShow.style.height="100px";
		oShow.style.background="#696969";
	}
	oC.onclick=function(){
		oSet.style.display="none";
		oDiv.style.background="#EFEFEF";
	}
