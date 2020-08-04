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
        '<select class="filter-breed">' + 
        '<option value="">Show All</option>' +
        '<option value="Beagle">Beagle</option>' +
        '</select>' +
        '</div>'+
        '<div>' +
        '<select class="filter-gender">' +
        '<option value="">Show All</option>' +
        '<option value="male">Male</option>' +
        '</select>' +
        '</div>' +
        '<div>' +
        '<select class="filter-energy_level">' +
        '<option value="">Show All</option>' +
        '<option value="high">High</option>' +
        '</select>' +
        '</div>' + 
        '<div>' +
        '<select class="filter-ease_of_training">' + 
        '<option value="">Show All</option>' +
        '<option value="easy">Easy</option>' +
        '</select>' +
        '</div>' +
        '</div>' + 
        '<span data-name = "Benny" data-breed = "Beagle" data-gender = "male" data-energy_level = "high" data-ease_of_training = "easy" class="product">'; 
    
    test('search: keyword not found', () => {
	  // Arrange
      $('#search-box').val("random");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeFalsy();
        expect($("#Harp").css('display')).toBeFalsy();
        done()
      }, 200)    
      
    })
    
    test('search: name found', () => {
	  // Arrange
      $('#search-box').val("Benny");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeTruthy();
        expect($("#Harp").css('display')).toBeFalsy();
        done()
      }, 200)    
      
    })
    
    test('search: breed found', () => {
	  // Arrange
      $('#search-box').val("Husky");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeFalsy();
        expect($("#Harp").css('display')).toBeTruthy();
        done()
      }, 200)    
      
    })
    
    test('search: gender found', () => {
	  // Arrange
      $('#search-box').val("Female");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeFalsy();
        expect($("#Harp").css('display')).toBeTruthy();
        done()
      }, 200)    
      
    })
    
    test('search: energy level found', () => {
	  // Arrange
      $('#search-box').val("high");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeTruthy();
        expect($("#Harp").css('display')).toBeFalsy();
        done()
      }, 200)    
      
    })
    
    test('search: ease of training found', () => {
	  // Arrange
      $('#search-box').val("easy");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeTruthy();
        expect($("#Harp").css('display')).toBeFalsy();
        done()
      }, 200)    
      
    })
    
    test('search: check if case sensitive', () => {
	  // Arrange
      $('#search-box').val("HuSkY");    
        
	  // Act
      dogFunc.searchFilter();
      
	  // Assert
      // jQuery takes 200ms to hide an html component
      expect(document.hidden).toEqual(false);
      setTimeout(function() {
        expect($("#Benny").css('display')).toBeFalsy();
        expect($("#Harp").css('display')).toBeTruthy();
        done()
      }, 200)    
      
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
});