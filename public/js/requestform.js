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
  // var phone = document.getElementById("reqNum");
  // var ph = new RegExp(/^(09|\+639)\d{9}$/);

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