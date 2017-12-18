/*
	JavaScript for VirtuaTech
	Author: Russ
	Date:   12/10/17

	Filename: script.js
*/
"use strict";

/*Navigation for mobile Tablet mode START*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropNav() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*Navigation for mobile Tablet mode END*/

// validate entered email on submitfunction 
function validateEmail()  {  
	var email = document.getElementById("emailbox");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.value.match(mailformat))  {  
		document.form1.emailInput.focus();  
		return true;  
	}  
	else  {  
		alert("You have entered an invalid email address!");  
		document.form1.emailInput.focus();  
		return false;  
	} 
} 

/* allows only today and future dates to be selected in the calendar widget*/
function validDate(){
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("date")[0].setAttribute('min', today);
}


/*counts characters on textbox in form on contact page*/
function countChar(val) {
	var len = val.value.length;
	if (len >= 250) {
		val.value = val.value.substring(0, 250);
	} else {
		$('#charNum').text(250 - len);
	}
};

/*validates email*/ 
function validateForm() {
	validateEmail();
}

/*resets form*/ 
function resetForm() {
    document.getElementById("form").reset();
}

