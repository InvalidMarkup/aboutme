function form() {
	document.getElementById('registration-form').style.display = "block";
}


function touch_1(){
	var name_value = document.getElementById('name');
	var email_value = document.getElementById('email');
	var web_value = document.getElementById('web');
	var message_value = document.getElementById('message');
	
	if(name_value.value == '') {
		document.getElementById('name_error').innerHTML ='Please Enter Your Name.';
		name_value.focus();
		return false;
	}else {
		document.getElementById('name_error').innerHTML ='';
	}
	if(email_value.value == '') {
		document.getElementById('email_error').innerHTML ='Please Enter Your Email.';
		email_value.focus();
		return false;
	}else {
		document.getElementById('email_error').innerHTML ='';
	}
	if(web_value.value == '') {
		document.getElementById('web_error').innerHTML ='Please Enter Your Webesite Address.';
		web_value.focus();
		return false;
	}else {
		document.getElementById('web_error').innerHTML ='';
	}
	if(message_value.value == '') {
		document.getElementById('message_error').innerHTML ='Please Write Something!';
		message_value.focus();
		return false;
	}else {
		document.getElementById('message_error').innerHTML ='';
	}
}


function touch_2() {
	var fname_var = document.getElementById('fname');
	var lname_var = document.getElementById('lname');
	var email1_var = document.getElementById('email1');
	var pass_var = document.getElementById('pass');
	var rpass_var = document.getElementById('rpass');
	
	
	
	if(fname_var.value == ''){
		document.getElementById('fname_error').innerHTML ="Please Enter Your First Name.";
		fname_var.focus();
		return false;
	}else {
		document.getElementById('fname_error').innerHTML ="";
	}
	if(lname_var.value == ''){
		document.getElementById('lname_error').innerHTML ="Please Enter Your Last Name.";
		lname_var.focus();
		return false;
	}else {
		document.getElementById('lname_error').innerHTML ="";
	}
	if(email1_var.value == ''){
		document.getElementById('email1_error').innerHTML ="Please Enter Your Email.";
		email1_var.focus();
		return false;
	}else {
		document.getElementById('email1_error').innerHTML ="";
	}
	if(pass_var.value == ''){
		document.getElementById('pass_error').innerHTML ="Please Enter Your Password.";
		pass_var.focus();
		return false;
	}else {
		document.getElementById('pass_error').innerHTML ="";
	}
	if(rpass_var.value == ''){
		document.getElementById('rpass_error').innerHTML ="Please Enter Your Password.";
		rpass_var.focus();
		return false;
	}else {
		document.getElementById('rpass_error').innerHTML ="";
	}
}


























