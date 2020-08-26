function myFunction() {
  var txt;
  swal.fire("Changes saved!", "Profile succesfully edited", "success")
}

function checkUsername(inputName){
      var specials = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;    
      inputName = inputName.replace(/^\s+/, '').replace(/\s+$/, '');
      if(inputName.length == 0) {
        $('#invalid-username').html("Username cannot be empty or whitespace.").css('color', 'red');
        return false;  
      } 
      else if (inputName.toLowerCase() == "admin"){
        $('#invalid-username').html("Username cannot be admin.").css('color', 'red');
        return false;  
      }
      else if (inputName.match(specials)){
          //console.log("no special characters");
        $('#invalid-username').html("No special characters allowed.").css('color', 'red'); 
        return false;  
      }    
      else{
        return true;  
      }    
}

// check if Password input is valid
function checkPassword(inputPass){
    // password attribute checker
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var special = document.getElementById("special");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specials = /[! "#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    var invalid = 0;                       // checker for whitespace only value

    // cannot be all whitespaces
      var inputSpaceless = inputPass.replace(/^\s+/, '').replace(/\s+$/, '');    
      if(inputSpaceless.length == 0) {
        $('#invalid-password').html("Password cannot be empty or whitespace.").css('color', 'red'); 
        invalid = 1;  
      }
      else{
        invalid = 0;  
      }
    // Validate lowercase letters
      if(inputPass.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

    // Validate capital letters
      if(inputPass.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

    // Validate numbers
      if(inputPass.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

     // Validate length
      if(inputPass.length >= 8 && !invalid) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }

     // Validate special character 
      if(inputPass.match(specials) && !invalid) {
        special.classList.remove("invalid");
        special.classList.add("valid");
      } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
      }
     
    // if one of the checkers fail, the password is not accepted
      if ($(".invalid")[0] || invalid){    // check if there is a class "invalid"
        return false;
      }
      else{
        return true;
      }
}

$(document).ready(function(){ 
    // show password 
    $("#showPasswordBtn").click(function(){
        $("#showPasswordBtn").find('i').toggleClass('fa-eye-slash');
        if($("#inputPassword").attr('type') == 'text'){
            $("#inputPassword").attr('type', 'password');
        }else{
            $("#inputPassword").attr('type', 'text');
        }   
    });
    
    // check if username is already taken 
    $('#editProfileAlert').hide();
    
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    
    // myParam determines whether it is username or email that's taken
    if(myParam == "username_taken") {
        $('#editProfileAlert').html("Username already taken.").css('text-align', 'center');
        $('#editProfileAlert').show();
    }
    else if (myParam == "emailaddress_taken"){
        $('#editProfileAlert').html("Email address already taken.").css('text-align', 'center');
        $('#editProfileAlert').show();
    }
    
    var password = document.getElementById("inputPassword");
    var email = document.getElementById("inputEmail");

    email.onkeyup = function(){
            if(!email.checkValidity()){
                $('#invalid-email').html("Email must follow the format: name@site.com").css('color', 'red');  
            }
        }

    document.getElementById("inputUsername").onkeyup = function(){
        var isValid = checkUsername(document.getElementById("inputUsername").value);
        if (isValid){
            document.getElementById('inputUsername').setCustomValidity("");
        }
        else{
            document.getElementById('inputUsername').setCustomValidity("Invalid field.");
        }
    }

    // When the user starts to type something inside the password field
    password.onkeyup = function() {
        var isValid = checkPassword(document.getElementById("inputPassword").value);
        if (isValid){
            document.getElementById('inputPassword').setCustomValidity("");
        }
        else{
            document.getElementById('inputPassword').setCustomValidity("Invalid field.");
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
console.log("stop event");    
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

// export functions for testing
module.exports = {checkUsername, checkPassword};