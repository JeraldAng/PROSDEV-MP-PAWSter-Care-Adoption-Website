// function alert(field){
//     alertify.set('notifier','position', 'bottom-left'); 
    
//     alertify.alert("Please input your " + field, function(){
//     alertify.message(field+" required");
//   }).setHeader('Invalid Input');
// }

$(document).ready(function(){
  
  var reqFirst = document.getElementById("fname");
  var reqLast = document.getElementById("lname");
  var email = document.getElementById("email");
  var feedback = document.getElementById("comment");

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
      $('#invalid-lname').html("First name cannot be empty or whitespace.").css('color', 'red');          
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