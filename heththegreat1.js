function doFirst(){
	var x=document.getElementById('canvas');
	canvas=x.getContext('2d');
	 
	canvas.beginPath();
	canvas.fillStyle="red";
	
	
	canvas.moveTo(20,20);
	canvas.lineTo(28,100);
	canvas.lineTo(36,80);
	canvas.closePath();
	canvas.fill();
	
	canvas.beginPath();
	canvas.moveTo(28,100);
	canvas.lineTo(36,80);
	canvas.lineTo(160,20);
	canvas.closePath();
	canvas.fill();
	
	canvas.strokeStyle="#191070";
	canvas.beginPath();
	canvas.moveTo(10,30);
	canvas.lineTo(85*2,30);
	canvas.closePath();
	canvas.stroke();
	  
	

	
	
}
window.addEventListener("load",doFirst,false);