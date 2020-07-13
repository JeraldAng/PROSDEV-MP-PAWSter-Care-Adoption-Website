$(document).ready(function(){
    $('TD').each(function() {
    if( $(this).text().includes("approved") || $(this).text().includes("rejected")  ){
        $(this).closest('td').next('td').find('input').hide();
      }
});
})

                