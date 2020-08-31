// function exportHTML(){
//        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
//             "xmlns:w='urn:schemas-microsoft-com:office:word' "+
//             "xmlns='http://www.w3.org/TR/REC-html40'>"+
//             "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
//        var footer = "</body></html>";
//        var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
       
//        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
//        var fileDownload = document.createElement("a");
//        document.body.appendChild(fileDownload);
//        fileDownload.href = source;
//        fileDownload.download = 'PAWSter Care Adoption Form.doc';
//        fileDownload.click();
//        document.body.removeChild(fileDownload);
//     }

// function alert(field){
//     alertify.set('notifier','position', 'bottom-left'); 
    
//     alertify.alert("Please input your " + field, function(){
//     alertify.message(field+" required");
//   }).setHeader('Invalid Input');
// }

$(document).ready(function(){
    
  var reqFirst = document.getElementById("reqFirst");
  var reqLast = document.getElementById("reqLast");
  var email = document.getElementById("reqEmail");
  var reqNum = document.getElementById("reqNum");
  var reqAddress = document.getElementById("reqAddress");
  //var ph = new RegExp(/^\d{10}$/);
	// /^(?:\+?\d{2}[ -]?\d{3}[ -]?\d{5}|\d{4})$/
	
  reqNum.onkeyup = function() { 
	var inputName = document.getElementById("reqNum");
	var ph = /^[\d\-\(\)\+}]+$/;
	  
	if(!ph.test(inputName.value)  || /\s/.test(inputName.value) || inputName.value.length > 11){
		document.getElementById('reqNum').setCustomValidity("Invalid field.");
		$('#invalid-pnum').html("Please enter a valid phone number.").css('color', 'red');
	}
	else{
		document.getElementById('reqNum').setCustomValidity("");
	}
	  
//    if((reqNum.value.match(ph)) && !/\s/.test(reqNum.value)) {
//	  document.getElementById('reqNum').setCustomValidity("");
//		//return true;
//    } 
//    else{ 
//		//document.getElementById('reqNum').setCustomValidity("Invalid field.");
//        $('#invalid-pnum').html("Please enter a valid phone number.").css('color', 'red');
//		//return false;
//    }  
  
  }
  
  reqAddress.onkeyup = function() { 
	var inputName = reqAddress.value;
	inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
	  
	if(inputName.length == 0) {
      document.getElementById('reqAddress').setCustomValidity("Invalid field.");
      $('#invalid-address').html("Address cannot be empty or whitespace.").css('color', 'red');          
    } 
    else{
      document.getElementById('reqAddress').setCustomValidity("");    
    } 
	  
//	if(/\s/.test(inputName.value)){
//		document.getElementById('reqAddress').setCustomValidity("Invalid field.");
//		$('#invalid-address').html("Address cannot be empty or whitespace.").css('color', 'red');
//	}
//	else{
//		document.getElementById('reqAddress').setCustomValidity("");
//	}
}
  
  

  email.onkeyup = function(){
      if(!email.checkValidity()){
          $('#invalid-email').html("Email must follow the format: name@site.com").css('color', 'red');  
      }
  }
  
  reqFirst.onkeyup = function() {   
    var inputName = reqFirst.value;
    inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
    if(inputName.length == 0) {
      document.getElementById('reqFirst').setCustomValidity("Invalid field.");
      $('#invalid-fname').html("First name cannot be empty or whitespace.").css('color', 'red');          
    } 
    else{
      document.getElementById('reqFirst').setCustomValidity("");    
    }    
  }
  
  reqLast.onkeyup = function() {   
    var inputName = reqLast.value;
    inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
    if(inputName.length == 0) {
      document.getElementById('reqLast').setCustomValidity("Invalid field.");
      $('#invalid-lname').html("Last name cannot be empty or whitespace.").css('color', 'red');          
    } 
    else{
      document.getElementById('reqLast').setCustomValidity("");    
    }    
  }


});

(function() {
      'use strict';
      window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
        });
      }, false);
})();