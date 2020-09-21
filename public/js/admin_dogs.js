function deleteDog(id){
    var selectedDog = document.querySelector("span[data-id='"+ id +"']")
    selectedDog.parentNode.removeChild(selectedDog);
}

$(document).ready(function(){
                // TODO: Put script for update
                $("button.edit").click(function(){      // local disk, fat arrow is a global disk
                    $("#editid").val($(this).attr("data-id"))
                    $("#editform").submit()
                    console.log("button.edit" + $(this).attr("data-id"))
                    
                })
                
                // TODO: Put script for delete
                $("button.delete").click(function(){
                    let id = $(this).attr("data-id")
                     $.ajax({
                         url: "delete-dog",                 // app.post("/delete")
                         method: "POST",
                         data: {
                            id : $(this).attr("data-id")
                         },
                         success: function(result){
                             if (result.ok == 1){
                                alertify.set('notifier','position', 'bottom-left'); 
                                alertify.success('Deleted Successfully');
                                 // remove the actual row
                                 deleteDog(id)
                             }
                             else
                                 alert("something went wrong")
                         }
                     })
                })
                })
    
    
// export functions for testing
module.exports = {deleteDog};    