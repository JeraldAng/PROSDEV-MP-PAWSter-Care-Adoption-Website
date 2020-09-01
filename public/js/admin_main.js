jQuery(document).ready(function($) {
    $( "div" ).remove( "#RequestsTable_length" );
    $( "div" ).remove( "#RequestsTable_filter" );
    $( "div" ).remove( "#RequestsTable_paginate" );
    $( "div" ).remove( "#RequestsTable_info" );
    
    $(".hide").each(function() {
        $(this).hide();
	});
    
    $("button.delete").click(function(){
        $(".hide").first().show();
        $(".hide").first().removeClass("hide");
    })
});
