var products = "";
var breeds = "";
var genders = "";
var energy_levels = "";
var ease_of_trainings = "";

// create all options for drop down based on the database data
$(".filter-breed").append(breeds);
$(".filter-gender").append(genders);
$(".filter-energy_level").append(energy_levels);
$(".filter-ease_of_training").append(ease_of_trainings);

var filtersObject = {};

// on search form submit
function searchFilter() {    
    // make search not case sensitive
    var query = $("#search-form input").val().toLowerCase();
	
    // hide all tiles, then show only those that matched the keywords
    $(".product").hide();
	$(".product").each(function() {
		var name = $(this).data("name").toLowerCase(),
            breed = $(this).data("breed").toLowerCase(),
			gender = $(this).data("gender").toLowerCase(),
			energy_level = $(this).data("energy_level").toLowerCase(),
			ease_of_training = $(this).data("ease_of_training").toLowerCase();

		if (name.indexOf(query) > -1 || breed.indexOf(query) > -1 || gender.indexOf(query) > -1 || energy_level.indexOf(query) > -1 || ease_of_training.indexOf(query) > -1) {
			$(this).show();
		}
	});  
}

// upon clicking clear filter button to reset all filters
function clearFilter() {
     $(".filter-breed").val("")                      
     $(".filter-gender").val("")                      
     $(".filter-energy_level").val("")                      
     $(".filter-ease_of_training").val("")  
     $("#search-box").val("")  

     $(".filter").change();
}

// action listeners 
$("#reset-filter").click(function(){
     clearFilter();
})

$("#search-form").submit(function(e) {
    e.preventDefault();
	searchFilter();
});

$(".filter").on("change",function () {
    var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	 }
	}

	// show all tiles that match filter, hide the rest
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

$(document).ready(function() {
    $(".filter").change();
    
    $('#requestAlert').hide();
        
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    if(myParam == "pendingrequest_found") {  
        $('#requestAlert').html("Sorry! Looks like you've requested for this dog already!").css('text-align', 'center');
        $('#requestAlert').show();
    }
});

// export functions for testing
module.exports = {clearFilter, searchFilter};