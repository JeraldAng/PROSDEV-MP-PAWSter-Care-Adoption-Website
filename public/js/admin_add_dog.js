 function previewFile(){
       var preview = document.getElementById('upload_ID'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()   


// check if Dog's Name is valid
function checkName(inputName){
    var nameFormat = /^[a-zA-Z0-9\s\-\.]+$/;
    
    if(inputName.match(nameFormat) && inputName.length <= 20 && !/^\s/.test(inputName)){ // && !/\s/.test(inputName)
        return true;
    }
    else{
        return false;
    }
}

//check if special conditions input is valid
function checkCondition(inputCondition){
    inputCondition = inputCondition.replace(/^\s+/, '').replace(/\s+$/, '');
    
    if(inputCondition.length == 0) {
        return false;    
    } 
    else{
        return true;    
    }    
}

//check if short description input is valid
function checkDescription(inputDescription){
    inputDescription = inputDescription.replace(/^\s+/, '').replace(/\s+$/, '');
    
    if(inputDescription.length == 0) {
        return false;    
    } 
    else{
        return true;    
    }    
}

function checkHeight(inputHeight){   
    if(inputHeight < 1) {
        return false;    
    } 
    else{
        return true;    
    }   
}

function checkWeight(inputWeight){   
    if(inputWeight < 1) {
        return false;    
    } 
    else{
        return true;    
    }   
}


$(document).ready(function(){
    
  var dog_name = document.getElementById("dog_name");
  var dog_conditions = document.getElementById("dog_conditions");
  var dog_description = document.getElementById("dog_description");
  var dog_height = document.getElementById("dog_height");
  var dog_weight = document.getElementById("dog_weight");
	
  dog_name.onkeyup = function() { 
	var inputName = document.getElementById("dog_name");
	var format = /^[a-zA-Z0-9\s\-\.]+$/;
	  
	if(!format.test(inputName.value)  || inputName.value.length > 20){
		document.getElementById('dog_name').setCustomValidity("Maximum of 20 characters.");
	}
	else if(/^\s/.test(inputName.value)){
    	inputName.value = '';
	  	document.getElementById('dog_name').setCustomValidity("Whitespace in the beginning is not allowed.");	  
  	}
	else{
		document.getElementById('dog_name').setCustomValidity("");
	}   
  } 
  
  dog_conditions.onkeyup = function() { 
	var inputName = document.getElementById("dog_conditions"); 
	  
	if(inputName.value.length > 50){
		document.getElementById('dog_conditions').setCustomValidity("Maximum of 50 characters.");
	}
	else if(/^\s/.test(inputName.value)){
    	inputName.value = '';
	  	document.getElementById('dog_conditions').setCustomValidity("Whitespace in the beginning is not allowed.");
	  
  	}
	else{
		document.getElementById('dog_conditions').setCustomValidity("");
	}   
  }
  
  dog_description.onkeyup = function() { 
	var inputName = document.getElementById("dog_description"); 
	  
	if(inputName.value.length > 50){
		document.getElementById('dog_description').setCustomValidity("Maximum of 50 characters.");
	}
	else if(/^\s/.test(inputName.value)){
    	inputName.value = '';
	  	document.getElementById('dog_description').setCustomValidity("Whitespace in the beginning is not allowed.");
	  
  	}
	else{
		document.getElementById('dog_description').setCustomValidity("");
	}   
  }
  
  dog_height.onkeyup = function() { 
	var inputName = document.getElementById("dog_height"); 
	  
	if(inputName.value < 1){
		document.getElementById('dog_height').setCustomValidity("Dog Height must not be less than 1.");
	}
	else{
		document.getElementById('dog_height').setCustomValidity("");
	}   
  }
  
  dog_weight.onkeyup = function() { 
	var inputName = document.getElementById("dog_weight"); 
	  
	if(inputName.value < 1){
		document.getElementById('dog_weight').setCustomValidity("Dog Weight must not be less than 1.");
	}
	else{
		document.getElementById('dog_weight').setCustomValidity("");
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

// export functions for testing
module.exports = {checkName, checkCondition, checkDescription, checkHeight, checkWeight};
