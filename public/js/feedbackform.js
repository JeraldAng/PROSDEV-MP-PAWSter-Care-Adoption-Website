function alert(field){
    alertify.set('notifier','position', 'bottom-left'); 
    
    alertify.alert("Please input your " + field, function(){
    alertify.message(field+" required");
  }).setHeader('Invalid Input');
}