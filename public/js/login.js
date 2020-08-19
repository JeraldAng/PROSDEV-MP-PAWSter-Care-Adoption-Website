$(document).ready(function(){ 
    
    $('#loginAlert').hide();
        
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    if(myParam == "Incorrect_Credential") {
        $('#loginAlert').show();
    }
    
    $("#showPasswordBtn").click(function(){
        $("#showPasswordBtn").find('i').toggleClass('fa-eye-slash');
        if($("#password").attr('type') == 'text'){
            $("#password").attr('type', 'password');
        }else{
            $("#password").attr('type', 'text');
        }   
    });
    
    })