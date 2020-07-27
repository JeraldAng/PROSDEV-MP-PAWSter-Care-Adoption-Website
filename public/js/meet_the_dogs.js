var products = "";
var breeds = "";
var genders = "";
var energy_levels = "";
var ease_of_trainings = "";

$(".filter-breed").append(breeds);
$(".filter-gender").append(genders);
$(".filter-energy_level").append(energy_levels);
$(".filter-ease_of_training").append(ease_of_trainings);

var filtersObject = {};

//on filter change
$(".filter").on("change",function () {
    console.log("change")
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

	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
function searchFilter() {
	var query = $("#search-form input").val().toLowerCase();
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

$("#search-form").submit(function(e) {
    e.preventDefault();
	searchFilter();
});

function clearFilter() {
     $(".filter-breed").val("")                      
     $(".filter-gender").val("")                      
     $(".filter-energy_level").val("")                      
     $(".filter-ease_of_training").val("")  
     $("#search-box").val("")  

     $(".filter").change();
}

$("#reset-filter").click(function(){
     clearFilter();
})

$(document).ready(function() {
    
	var filterName = $(".filter").data("filter"),
		filterVal = $(".filter").val();
	
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
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}

});

module.exports = clearFilter;
//module.exports = searchFilter;


