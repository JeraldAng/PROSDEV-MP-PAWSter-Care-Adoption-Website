// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/meet_the_dogs');

describe('Filter search results', () => {
    
    // simulate the html, since majority of the functions rely on changing html properties
    // use this for the entire test
    document.body.innerHTML =
        '<form id="search-form" action="" method="POST" enctype="multipart/form-data">' +
        '<input id="search-box" value=""/>' +
        '<button id = "reset-filter"/>' +
        '<div>' +
        '<div>' +
        '<select class="filter-breed filter">' + 
        '<option value="">Show All</option>' +
        '<option value="Beagle">Beagle</option>' +
        '</select>' +
        '</div>'+
        '<div>' +
        '<select class="filter-gender filter">' +
        '<option value="">Show All</option>' +
        '<option value="male">Male</option>' +
        '</select>' +
        '</div>' +
        '<div>' +
        '<select class="filter-energy_level filter">' +
        '<option value="">Show All</option>' +
        '<option value="high">High</option>' +
        '</select>' +
        '</div>' + 
        '<div>' +
        '<select class="filter-ease_of_training filter">' + 
        '<option value="">Show All</option>' +
        '<option value="easy">Easy</option>' +
        '</select>' +
        '</div>' +
        '</div>' + 
        '<span id="Benny" class = "product" data-name = "Benny" data-breed = "Beagle" data-gender = "male" data-energy_level = "high" data-ease_of_training = "easy">' + 
        '</span>' +
        '<span id="Harp" class = "product" data-name = "Harp" data-breed = "Husky" data-gender = "female" data-energy_level = "low" data-ease_of_training = "difficult">' +
        '</span>' +
        '<span id="Hershey" class = "product" data-name = "Hershey" data-breed = "Husky" data-gender = "male" data-energy_level = "high" data-ease_of_training = "difficult">' +
        '</span>'; 
    
    // display should be "none" if it will be hidden, "" if it will be shown
    
    test('search: keyword not found', () => {
	  // Arrange
      $('#search-box').val("random");    
        
	  // Act
      dogFunc.searchFilter();
        
      // Assert
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("none"); 
    })
    
    test('search: name found', () => {
	  // Arrange
      $('#search-box').val("Benny");    
        
	  // Act
      dogFunc.searchFilter();

	  // Assert
      expect($("#Benny").css('display')).toBe("");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("none"); 
    })
    
    test('search: breed found', () => {
	  // Arrange
      $('#search-box').val("Husky");    
        
	  // Act
      dogFunc.searchFilter();
        
	  // Assert
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("");
      expect($("#Hershey").css('display')).toBe("");
    })
    
    test('search: gender found', () => {
	  // Arrange
      $('#search-box').val("Female");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      expect(document.hidden).toEqual(false);
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("");
      expect($("#Hershey").css('display')).toBe("none");
    })
    
    test('search: energy level found', () => {
	  // Arrange
      $('#search-box').val("high");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      expect($("#Benny").css('display')).toBe("");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("");
    })
    
    test('search: ease of training found', () => {
	  // Arrange
      $('#search-box').val("easy");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect($("#Benny").css('display')).toBe("");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("none");
    })
    
    test('search: check if case sensitive', () => {
	  // Arrange
      $('#search-box').val("HuSkY");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("");
      expect($("#Hershey").css('display')).toBe("");
    })
    
    // selected option should return to default
    test('clear search', () => {
	  // Arrange
      $('.filter-breed').val("Beagle");
      $('.filter-gender').val("male");
      $('.filter-energy_level').val("high");
      $('.filter-ease_of_training').val("easy");
      $('#search-box').val("search for dogs");

	  // Act
      dogFunc.clearFilter();
      
	  // Assert
      expect($(".filter-breed").val()).toEqual("");
      expect($(".filter-gender").val()).toEqual("");
      expect($(".filter-energy_level").val()).toEqual("");
      expect($(".filter-ease_of_training").val()).toEqual("");
      expect($("#search-box").val()).toEqual("");
  })
    
    var filtersObject = {};

    test('filter: no dogs of the chosen category', () => {
	  // Arrange
      var filterName = ["breed", "energy_level", "ease_of_training"],
		  filterVal = ["Dachshund", "moderate", "average"];

	  // Act
        for(i = 0; i < filterVal.length; i++)
            dogFunc.FilterItems(filtersObject, filterName[i], filterVal[i]);
      
	  // Assert
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("none");
  })
    
    test('filter: show all', () => {
	  // Arrange
      var filterName = ["breed", "gender", "energy_level", "ease_of_training"],
		  filterVal = "";

	  // Act
        for(i = 0; i < filterName.length; i++)
            dogFunc.FilterItems(filtersObject, filterName[i], filterVal);
      
	  // Assert
      expect($("#Benny").css('display')).toBe("");
      expect($("#Harp").css('display')).toBe("");
      expect($("#Hershey").css('display')).toBe("");
  })
    
    test('filter: single category', () => {
	  // Arrange
      var filterName = "ease_of_training",
		  filterVal = "easy";

	  // Act
        dogFunc.FilterItems(filtersObject, filterName, filterVal);
      
	  // Assert
      expect($("#Benny").css('display')).toBe("");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("none");
  })
    
    test('filter: two categories', () => {
	  // Arrange
      filtersObject = {};
      var filterName = ["breed", "energy_level"],
		  filterVal = ["Husky", "high"];

	  // Act
        for(i = 0; i < filterVal.length; i++)
            dogFunc.FilterItems(filtersObject, filterName[i], filterVal[i]);

	  // Assert
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("none");
      expect($("#Hershey").css('display')).toBe("");
  })
    
    test('filter: all categories', () => {
	  // Arrange
      filtersObject = {};
      var filterName = ["breed", "gender", "energy_level", "ease_of_training"],
		  filterVal = ["Husky", "female", "low", "difficult"];

	  // Act
        for(i = 0; i < filterVal.length; i++)
            dogFunc.FilterItems(filtersObject, filterName[i], filterVal[i]);
      
	  // Assert
      expect($("#Benny").css('display')).toBe("none");
      expect($("#Harp").css('display')).toBe("");
      expect($("#Hershey").css('display')).toBe("none");
  })
});