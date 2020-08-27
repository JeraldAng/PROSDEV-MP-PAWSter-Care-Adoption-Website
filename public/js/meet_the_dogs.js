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
$('#nodogsfound').hide();

var filtersObject = {};

// on search form submit
function searchFilter() {    
    $('#nodogsfound').hide();
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
    
    if($('#gallery').children(':visible').length == 0) {
        $('#nodogsfound').show();
    }
}

// upon clicking clear filter button to reset all filters
function clearFilter() {
     $(".filter-breed").val("")                      
     $(".filter-gender").val("")                      
     $(".filter-energy_level").val("")                      
     $(".filter-ease_of_training").val("")  
     $("#search-box").val("")  

    FilterItems(filtersObject, "breed", "");
    FilterItems(filtersObject, "energy_level", "");
    FilterItems(filtersObject, "gender", "");
    FilterItems(filtersObject, "ease_of_training", "");
}

function FilterItems(filtersObject, filterName, filterVal){
    $('#nodogsfound').hide();
    
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
    
    if($('#gallery').children(':visible').length == 0) {
        $('#nodogsfound').show();
    }
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
    
    console.log(filterName, filterVal);
    
    FilterItems(filtersObject, filterName, filterVal);
});

$(document).ready(function() {
    $(".filter").change();
    
    jQuery.noConflict(); 
    $('#RequestFoundModal').modal('hide');
        
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    if(myParam == "pendingrequest_found") {
        $('#RequestFoundModal').modal('show');
    }
});

// export functions for testing
module.exports = {clearFilter, searchFilter, FilterItems};