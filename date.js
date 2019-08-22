function printTime(){
	var now=new Date();
	var hours=now.getHours();
	var minutes=now.getMinutes();
	var second=now.getSeconds();
	
	alert("Congratulations,"+"<br/>"+"You have logged in at-"+hours+":"+minutes+":"+seconds+"This is a very auspicious time to enter the website according to AURICLE!!!")
	
	
}
window.addEventListener("load",printTime,false);