// setCustomValidity("") will make the form true/valid
// setCustomValidity("any text here") will make the form false/invalid 

$(document).ready(function(){
    // check if username is already taken 
    $('#signupAlert').hide();
    
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    
    // myParam determines whether it is username or email that's taken
    if(myParam == "username_taken") {
        $('#signupAlert').html("Username already taken.").css('text-align', 'center');
        $('#signupAlert').show();
    }
    else if (myParam == "emailaddress_taken"){
        $('#signupAlert').html("Email address already taken.").css('text-align', 'center');
        $('#signupAlert').show();
    }
    
    // password and confirm password matcher
    
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email-address");
    var confirm = document.getElementById('confirm-password');
    
    $('#password, #confirm-password').on('keyup', function () {    
        if (password.value == confirm.value && password.value && confirm.value && password.checkValidity()) {
        $('#invalid-confirm-password').html('match!').css('color', 'green');
        document.getElementById('confirm-password').setCustomValidity("");    
      }
        else if (!password.checkValidity()){    // don't say matched if password is invalid
        $('#invalid-confirm-password').html('password not valid').css('color', 'red');
        document.getElementById('confirm-password').setCustomValidity("Password is not valid.");
        }
        else{ 
        $('#invalid-confirm-password').html('mismatch!').css('color', 'red');
        document.getElementById('confirm-password').setCustomValidity("Passwords don't match.");
      }
    });
    
    // inputs cannot be all whitespaces
    
    email.onkeyup = function(){
        if(!email.checkValidity()){
            $('#invalid-email').html("Email must follow the format: name@site.com").css('color', 'red');  
        }
    }
    
    var specials = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;    
    
    username.onkeyup = function() {   
      var inputName = username.value;
      inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
      if(inputName.length == 0) {
        document.getElementById('username').setCustomValidity("Invalid field.");
        $('#invalid-username').html("Username cannot be empty or whitespace.").css('color', 'red');          
      } 
      else if (inputName.toLowerCase() == "admin"){
        document.getElementById('username').setCustomValidity("Invalid field.");
        $('#invalid-username').html("Username cannot be admin.").css('color', 'red');   
      }
      else if (username.value.match(specials)){
        document.getElementById('username').setCustomValidity("Invalid field.");
        $('#invalid-username').html("No special characters allowed.").css('color', 'red');   
      }    
      else{
        document.getElementById('username').setCustomValidity("");    
      }    
    }
    
    // password attribute checker
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var special = document.getElementById("special");

    // When the user starts to type something inside the password field
    password.onkeyup = function() {
      // cannot be all whitespaces
      var inputPwd = password.value;
      inputPwd = inputPwd.replace(/^\s+/, '').replace(/\s+$/, '');    
      if(inputPwd.length == 0) {
        document.getElementById('password').setCustomValidity("Password cannot all be whitespace."); 
        $('#invalid-password').html("Password cannot be empty or whitespace.").css('color', 'red');  
      }
      else{
        document.getElementById('password').setCustomValidity("");              
      }
            
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        document.getElementById('password').setCustomValidity("Password must have a lowercase.");             
    }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        document.getElementById('password').setCustomValidity("Password must have an uppercase.");                       
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if(password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
        document.getElementById('password').setCustomValidity("Password must have a number.");                       
      }

      // Validate length
      if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        document.getElementById('password').setCustomValidity("Password must be 8 characters or more.");                       
      }
        
      // Validate special character
        
      if(password.value.match(specials)) {
        special.classList.remove("invalid");
        special.classList.add("valid");
      } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
        document.getElementById('password').setCustomValidity("Password must have a special character.");                       
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