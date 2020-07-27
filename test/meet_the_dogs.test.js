const $ = require('../public/js/jquery');
const { clearFilter } = require('../public/js/meet_the_dogs');

jest.mock('../public/js/meet_the_dogs');

describe('Filter search results', () => {
  test('clear search', () => {
	  // Arrange
	  document.body.innerHTML =
        '<input id="search-box" value="search"/>' +
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
        '</div>'; 
      $(".filter-breed").val("Beagle").change();
      $(".filter-gender").val("male").change();
      $(".filter-energy_level").val("high").change();
      $(".filter-ease_of_training").val("easy").change();

	  // Act
      $("#reset-filter").click();
      
	  // Assert
	  expect(clearFilter).toBeCalled();
      expect($(".filter-breed").val()).toEqual("");
      expect($(".filter-gender").val()).toEqual("");
      expect($(".filter-energy_level").val()).toEqual("");
      expect($(".filter-ease_of_training").val()).toEqual("");
      expect($("#search-box").val()).toEqual("");
  })
});
