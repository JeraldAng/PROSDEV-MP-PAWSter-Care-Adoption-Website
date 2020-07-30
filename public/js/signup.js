// setCustomValidity("") will make the form true/valid
// setCustomValidity("any text here") will make the form false/invalid 

$(document).ready(function(){    
    // password and confirm password matcher
    
    $('#password, #confirm-password').on('keyup', function () {
      var password = document.getElementById('password').value;
      var confirm = document.getElementById('confirm-password').value;    
        
        if (password == confirm && password && confirm) {
        $('#invalid-confirm-password').html('match!').css('color', 'green');
        document.getElementById('confirm-password').setCustomValidity("");    
      } else{ 
        $('#invalid-confirm-password').html('mismatch').css('color', 'red');
        document.getElementById('confirm-password').setCustomValidity("Passwords don't match.");
      }
    });
    
    // inputs cannot be all whitespaces
    
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
    username.onkeyup = function() {   
      var inputName = username.value;
      inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
        console.log(inputName);
      if(inputName.length == 0) {
        document.getElementById('username').setCustomValidity("Invalid field.");
        $('#invalid-username').html("Username cannot be empty or whitespace.").css('color', 'red');          
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
      var specials = /[!#$^*]/;    
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