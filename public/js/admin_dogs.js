$(document).ready(function(){
                // TODO: Put script for update
                $("button.edit").click(function(){      // local disk, fat arrow is a global disk
                    $("#editid").val($(this).attr("data-id"))
                    $("#editform").submit()
                    console.log("button.edit" + $(this).attr("data-id"))
                    
                })
                
                // TODO: Put script for delete
                $("button.delete").click(function(){
//                    console.log("button.delete" + $(this).attr("data-id"))
//                    $("#deleteid").val($(this).attr("data-id"))
//                    $("#deleteform").submit()
                    
                    let id = $(this).attr("data-id")
                     $.ajax({
                         url: "delete",                 // app.post("/delete")
                         method: "POST",
                         data: {
                            id : $(this).attr("data-id")
                         },
                         success: function(result){
                             if (result.ok == 1){
                                alertify.set('notifier','position', 'bottom-left'); 
                                alertify.success('Deleted Successfully');
                                 // remove the actual row
                                 $("span[data-id='"+id+"']").remove()
                             }
                             else
                                 alert("something went wrong")
                            console.log(result)
                         }
                     })
                })
    
            })