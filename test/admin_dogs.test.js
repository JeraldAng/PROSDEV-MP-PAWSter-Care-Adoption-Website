// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/admin_dogs.js');

describe('Delete a selected dog', () => {
    
    // simulate the html, since majority of the functions rely on changing html properties
    // use this for the entire test
    document.body.innerHTML =
        '<span data-id="5f4fce8eb7422100049c858f" id="Benny" class = "product" data-name = "Benny" data-breed = "Beagle" data-gender = "male" data-energy_level = "high" data-ease_of_training = "easy">' + 
        '</span>' +
        '<span data-id="5f4fce8eb7422100049c858e" id="Harp" class = "product" data-name = "Harp" data-breed = "Husky" data-gender = "female" data-energy_level = "low" data-ease_of_training = "difficult">' +
        '</span>' +
        '<span data-id="5f4fce8eb7422100049c858d" id="Hershey" class = "product" data-name = "Hershey" data-breed = "Husky" data-gender = "male" data-energy_level = "high" data-ease_of_training = "difficult">' +
        '</span>' + 
        '<button class="delete" data-id="5f4fce8eb7422100049c858f">' + '</button>' +
        '<button class="delete" data-id="5f4fce8eb7422100049c858e">' + '</button>' +
        '<button class="delete" data-id="5f4fce8eb7422100049c858d">' + '</button>'
    
    // display should be "none" if it will be hidden, "" if it will be shown
    
    test('delete first dog', () => {
	  // Arrange
        
	  // Act
      dogFunc.deleteDog("5f4fce8eb7422100049c858f");
        
      // Assert
      expect($("#Benny")).toEqual({});
      expect($("#Harp")).not.toEqual({});
      expect($("#Hershey")).not.toEqual({});
    })
});