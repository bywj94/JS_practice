var oInp1=document.getElementById("inp1");
var oInp2=document.getElementById("inp2");
var oSpn1=document.getElementById("spn1");
var oSpn2=document.getElementById("spn2");
var oPrev=document.getElementById("btn1");
var oNext=document.getElementById("btn2");
var oImg=document.getElementById("img1");
var oText=document.getElementById("text");

var arrImg=['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
var arrText=['狗狗','朋友','动漫美女','植物'];

//初始化
var num=0;
function fnTab(){
	oSpn1.innerHTML=num+1+'/'+arrText.length;
	oImg.src=arrImg[num];
	oSpn2.innerHTML=arrText[num];
}
fnTab();

//默认切换
oPrev.onclick=function(){
	num--;
	if(num==-1){
		num=3;
	}
	fnTab();
}
oNext.onclick=function(){
	num++;
	if(num==4){
		num=0;
	}
	fnTab();
}

//循环切换 与默认相同
oInp1.onclick=function(){
	oInp2.style.background='';
	oInp2.style.color='';
	oInp1.style.background='red';
	oInp1.style.color='#fff';
	oText.innerHTML="图片可以从最后一张跳转到第一张循环";
	oText.style.display="block";
	oPrev.onclick=function(){
	num--;
	if(num==-1){
		num=3;
	}
	fnTab();
}
oNext.onclick=function(){
	num++;
	if(num==4){
		num=0;
	}
	fnTab();
}
}

//顺序循环
oInp2.onclick=function(){
	oInp1.style.background='';
	oInp1.style.color='';
	oInp2.style.background='red';
	oInp2.style.color='#fff';
	oText.innerHTML="图片只能到最后一张或者只能到第一张切换";
	oText.style.display="block";
	oPrev.onclick=function(){
	num--;
	if(num<0){
		num=0;
		alert("亲，这已经是第一张了，不能再前往了~~");
	}
	fnTab();
}
oNext.onclick=function(){
	num++;
	if (num>=4){
		num=3;
		alert("亲，已经是最后一张了~~");
	}
	fnTab();
}
}
