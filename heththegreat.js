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
	
	canvas.strokeStyle="green";
	canvas.beginPath();
	canvas.moveTo(10,30);
	canvas.lineTo(85*2,30);
	canvas.closePath();
	canvas.stroke();
	
	
	
}

window.addEventListener("load",doFirst,false);

var i=0,images=["natalie.png","emma.png","scarlett.png"];
function myslide(param){
	if(param=='next')
	{
		i++;
		if(i==images.length){i=images.length-1;}
		
		
		
	}else{
		i--;
		if(i<0){i=0;}
	}
	document.getElementById('slide1').src=images[i];
}

function valid(){
	var name=document.getElementById("names").value;
	if(name.length<=10&&name.length>1){
	
	}
	else{
		alert("characters length is either greater than 10 or less than 2");
	}
	var passw=document.getElementById("pass").value;
	var x=passw.length;
	if(passw.length<=10){
	for(var i=0;i<=x;i++)
	{
		if(passw[i]=='!'||passw[i]=='&'||passw[i]=='%'||passw[i]=='@')
	{
			
			break;
	}
	else if(i==x) 
	alert("password lacks these characters -!,&,%,@");
	else{
		continue;
	}
	}
	}
	else{
		alert("your password length exceeds limit of 10 characters");
	}
	
	for(var i=0;i<=x;i++){
		if(passw.charAt(i)>='A'&&passw.charAt(i)<='Z')
		{
			break;
		}
		else if(i==x){
			alert("your password doesnt have a capital character");
		}
		else{
			continue;
		}
		
	}
}

function validi(){
	var name=document.getElementById("nam").value;
	if(name.length<=10&&name.length>1){
	
	}
	else{
		alert("Name length is either greater than 10 or less than 2");
	}
	var x=document.getElementById("ema").value;
	var y="gmail.com"
	for(i=0;i<=x.length;i++){
		if(x.charAt(i)=='@'){
			var h=x.length-i-1;
			for(var j=0;j<h;j++){
				if(x.charAt(j+i+1)==y.charAt(j)){
					if(j==h-1){
					
					break;}
				}
				else if(x.charAt(j+i+1)!=y.charAt(j)){
					alert("invalid email id ");
					break;
				}
				else{
					continue;
				}
			}
			break;
		}
		else if(i==x.length){
			alert("invalid email id");
		}
		else{
			continue;
		}
		
	}
	var passw=document.getElementById("passw").value;
	var x=passw.length;
	if(passw.length<=10){
	for(var i=0;i<=x;i++)
	{
		if(passw[i]=='!'||passw[i]=='&'||passw[i]=='%'||passw[i]=='@')
	{
			
			break;
	}
	else if(i==x) 
	alert("password lacks these characters -!,&,%,@");
	else{
		continue;
	}
	}
	}
	else{
		alert("your password length exceeds limit of 10 characters");
	}
	
	for(var i=0;i<=x;i++){
		if(passw.charAt(i)>='A'&&passw.charAt(i)<='Z')
		{
			break;
		}
		else if(i==x){
			alert("your password doesnt have a capital character");
		}
		else{
			continue;
		}
		
	}
	var contact=document.getElementById("cont").value;
	if(contact.length==10){
	for(var i=0;i<=contact.length;i++){
		if(contact[i]<=9&&contact[i]>=0){
			
			if(i==contact.length-1){
				
				break;
			}
			else{
				continue;
			}
		}
		else if(i==contact.length){
			alert("contact no is invalid");
		}
		else{
			continue;
		}
	}
	}
	else{
		alert("contact no should have exactly 10 digits");
	}
}



function valid2(){
	var name=document.getElementById("namee2").value;
	if(name.length<=10&&name.length>1){
	
     document.getElementById("namee").innerHTML=name;
	}
	else{
		alert("characters length is either greater than 10 or less than 2");
	}
	
	var l=document.getElementById("idd2").value;
	var m="gmail.com"
	for(var i=0;i<=l.length;i++){
		if(l.charAt(i)=='@'){
			var h=l.length-i-1;
			for(var j=0;j<h;j++){
				if(l.charAt(j+i+1)==m.charAt(j)){
					if(j==h-1){
					 document.getElementById("iddd").innerHTML=l;
					break;}
				}
				else if(l.charAt(j+i+1)!=m.charAt(j)){
					alert("invalid email id ");
					break;
				}
				else{
					continue;
				}
			}
			break;
		}
		else if(i==l.length){
			alert("invalid email id");
		}
		else{
			continue;
		}
		
	}
	
	var passw=document.getElementById("password2").value;
	var x=passw.length;
	if(passw.length<=10){c=0;
	for(var i=0;i<=x;i++)
	{
		if(passw[i]=='!'||passw[i]=='&'||passw[i]=='%'||passw[i]=='@')
	{
		 c++;
			break;
	}
	else if(i==x) 
	alert("password lacks these characters -!,&,%,@ ");
	else{
		continue;
	}
	}
	for(var i=0;i<=x;i++)
	{
		if(passw.charAt(i)>='A'&&passw.charAt(i)<='Z')
	{
		 c++;
			break;
	}
	else if(i==x) 
	alert("password lacks a capital character");
	else{
		continue;
	}
	}
	if(c==2){
		document.getElementById("password6").innerHTML=passw;
		
	}
	
	}
	else{
		alert("your password length exceeds limit of 10 characters");
	}
	
	var contact=document.getElementById("phone2").value;
	if(contact.length==10){
	for(var i=0;i<contact.length;i++){
		if(contact[i]<=9&&contact[i]>=0){
			continue;
		}
		else{
			alert("contact no is invalid");
		}
	}
		document.getElementById("phone").innerHTML=contact;
	}
	else{
		alert("contact no should have exactly 10 digits");
	}
	
	
	
	
	
	
	
	var dob=document.getElementById("dob2").value;
	var j=dob.length;
	for(var i=0;i<j-4;i++){
		if(dob[2]=='/'||dob[5]=='/'){
			continue;
		}
		else if((dob[0]>=0&&dob[0]<=3)&&(dob[1]<=9&&dob[1]>=0)){
			continue;
		}
		else if((dob[3]>=0&&dob[3]<=1)&&(dob[4]>=0&&dob[4]<=9)){
			if(dob[3]==1&&(dob[4]<=2&&dob[4]>=0)){
				continue;
			}
			else{
				alert("cincorrect input");
				break;
			}
		}
		else if(i==j-5){
			document.getElementById("dob1").innerHTML=dob;
		}
		else {
			alert("alert");
		}
		
		
	}
	
}


     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#prof')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


function valid4(){var name=document.getElementById("nam").value;
	if(name.length<=10&&name.length>1){
	
	}
	else{
		alert("Name length is either greater than 10 or less than 2");
	}
	var passw=document.getElementById("pass").value;
	var x=passw.length;
	if(passw.length<=10){
	for(var i=0;i<=x;i++)
	{
		if(passw[i]=='!'||passw[i]=='&'||passw[i]=='%'||passw[i]=='@')
	{
			
			break;
	}
	else if(i==x) 
	alert("password lacks these characters -!,&,%,@");
	else{
		continue;
	}
	}
	}
	else{
		alert("your password length exceeds limit of 10 characters");
	}
	
	for(var i=0;i<=x;i++){
		if(passw.charAt(i)>='A'&&passw.charAt(i)<='Z')
		{
			break;
		}
		else if(i==x){
			alert("your password doesnt have a capital character");
		}
		else{
			continue;
		}
		
	}
}




