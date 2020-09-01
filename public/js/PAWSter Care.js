$(document).ready(function(){ 
    
    jQuery.noConflict(); 
    $('#WrongLoginModal').modal('hide');
        
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    if(myParam == "Incorrect_Credential") {
        $('#WrongLoginModal').modal('show');
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


// file chooser image updater
function changeImage() {
    document.getElementById("avatar").src = document.getElementById("input-file").value;
}

function alert(field){
    alertify.set('notifier','position', 'bottom-left'); 
    
    alertify.alert("Please input your " + field, function(){
    alertify.message(field+" required");
  }).setHeader('Invalid Input');
}

function HighlightTab(page) {
    document.getElementById(page).style.backgroundColor = "#82A9CD";
};

function HighlightTabAdmin(page) {
    document.getElementById(page).style.backgroundColor = "#70AE98";
};







