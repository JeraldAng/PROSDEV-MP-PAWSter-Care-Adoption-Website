$(document).ready(function(){ 
    
    $('#loginAlert').hide();
        
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    if(myParam == "Incorrect_Credential") {
        $('#loginAlert').show();
    }
    
    })