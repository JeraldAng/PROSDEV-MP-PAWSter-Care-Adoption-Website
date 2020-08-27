// check if Firstname or Lastname is valid
function checkName(inputName, whichName){
    inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
    
    if(inputName.length == 0) {
        // whichName can be any of the two for unit testing
        if(whichName == "firstname")
            $('#invalid-fname').html("First name cannot be empty or whitespace.").css('color', 'red'); 
        else if (whichName == "lastname")
            $('#invalid-lname').html("First name cannot be empty or whitespace.").css('color', 'red');     
      
        return false;    
    } 
    else{
      return true;    
    }    
}

//check if email is valid
function checkEmail(inputEmail){
    var emailFormat = /\S+@\S+\.\S+/;
    
    if(inputEmail.match(emailFormat)){
        return true;
    }
    else{
        $('#invalid-email').html("Email must follow the format: name@site.com").css('color', 'red');
        return false;
    }
}

//check if feedback text is valid
function checkFeedbackText(inputFeedback){
    inputFeedback = inputFeedback.replace(/^\s+/, '').replace(/\s+$/, '');
    
    if(inputFeedback.length == 0) {
        $('#invalid-feedback').html("Feedback cannot be empty or whitespace.").css('color', 'red'); 
        return false;    
    } 
    else{
      return true;    
    }    
}

$(document).ready(function(){
    console.log("dfdfdfdf");
    
    var reqFirst = document.getElementById("fname");
    var reqLast = document.getElementById("lname");
    var email = document.getElementById("email");
    var feedback = document.getElementById("comment");
    
    // When the user starts to type something inside the email field
    email.onkeyup = function(){
        var isValid = checkEmail(email.value);
        if(isValid){
             email.setCustomValidity("");     
        }
        else{
            email.setCustomValidity("Invalid field.");
        }
    }
  
  // When the user starts to type something inside the first name field     
  reqFirst.onkeyup = function() {   
      var isValid = checkName(reqFirst.value, "firstname");
      
      console.log("isValid");
      if (isValid){
            reqFirst.setCustomValidity("");
      }
      else{
            reqFirst.setCustomValidity("Invalid field.");
      }
  }
  
  // When the user starts to type something inside the last name field
  reqLast.onkeyup = function() {   
      var isValid = checkName(reqLast.value, "lastname");
      
      if (isValid){
            reqLast.setCustomValidity("");
      }
      else{
            reqLast.setCustomValidity("Invalid field.");
      }
  }
  
  feedback.onkeyup = function() {   
      var isValid = checkFeedbackText(feedback.value);
      
      if (isValid){
            feedback.setCustomValidity("");
      }
      else{
            feedback.setCustomValidity("Invalid field.");
      }
  }
});

(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
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