// JavaScript Document
	var p1y=p2y=40;
	var pt=10;
	var ph=100;
	var bx=by=50;
	var xv=yv=4;
	var bd=6;
	var score1=score2=0;
	var ais=2;
	
	window.onload=function(){
		var c=document.getElementById('gc');
		var cc=c.getContext('2d');
		setInterval(update, 1000/30);
		c.addEventListener('mousemove',function(e){
			p1y=e.clientY-ph/2;
			
		});
	}
	function reset(){
		bx=c.width/2;
		by=c.height/2;
		xv=-xv;
		yv=3;
		
	}
	function update(){
		bx+=xv;
		by+=yv;
		if(by<0 && yv<0){
			yv=-yv;
		}
		if(by>c.height && yv>0){
			yv=-yv;
		}
		if(bx<0){
			if(by>p1y && by<p1y+ph){
				xv=-xv;
				dy=by-(p1y+ph/2);
				yv=dy*0.3;				
			}
			else{
				score2++;
				reset();
			}
		}
		
		if(bx>c.width){
			if(by>p2y && by<p2y+ph){
				xv=-xv;
				dy=by-(p2y+ph);
				yv=dy*0.3;				
			}
			else{
				score1++;
				reset();
			}
		}
		
		if(p2y+ph/2<by){
			p2y+=ais;
		}else{
			p2y-=ais;
		}
		
		cc.fillStyle='black';
		cc.fillRect=(0,0,c.width,c.height);
		cc.fillStyle='white';
		cc.fillRect(0,p1y,pt,ph);
		cc.fillRect(c.width-pt,p2y,pt,ph);
		cc.fillRect(bx-bd/2,by-bd/2,bd,bd);
		cc.fillRect(score1,100,100);
		cc.fillRect(score2,c.width-100,100);
	}