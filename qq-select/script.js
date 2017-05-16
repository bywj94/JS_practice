var oUl=document.getElementById('list');
var oH2=oUl.getElementsByTagName('h2');
var aUi=oUl.getElementsByTagName('ul');
var aLi=null;
var arrLi=[];

for(var i=0;i<oH2.length;i++){
	oH2[i].index=i;
	oH2[i].onclick=function(){

		if(this.className==''){
		aUi[this.index].style.display='block';
		this.className='active';
		}else{
		aUi[this.index].style.display='none';
		this.className='';
		}
	}
}

for(var i=0;i<aUi.length;i++){
	aLi=aUi[i].getElementsByTagName('li');
	for(var j=0;j<aLi.length;j++){
		arrLi.push(aLi[j]);
	}
}

for(var i=0;i<arrLi.length;i++){
	arrLi[i].onclick=function(){
		for(var i=0;i<arrLi.length;i++){
			arrLi[i].className='';
		}
		this.className='active2';
	}
}
