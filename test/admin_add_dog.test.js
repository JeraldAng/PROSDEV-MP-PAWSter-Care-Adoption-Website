// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/admin_add_dog');

// This is so that function calls to HTML elements will not return null
document.body.innerHTML =
        '<p id="letter" class="invalid">' + '</p>' +
        '<p id="capital" class="invalid">' + '</p>' +
        '<p id="number" class="invalid">' + '</p>' +
        '<p id="length" class="invalid">' + '</p>' +
        '<p id="special" class="invalid">' + '</p>';

describe('Dog Name checker', () => {
    test('Dog Name: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkName(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Dog Name: input alphanumeric string', () => {
	  // Arrange
      var input = "Doggy123";   
        
	  // Act
      var isValid = dogFunc.checkName(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('Dog Name: input valid special characters (dash, period)', () => {
	  // Arrange
      var input = "Mr. Bing-Bong";   
        
	  // Act
      var isValid = dogFunc.checkName(input);
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
	
	test('Dog Name: input invalid special characters', () => {
	  // Arrange
      var input = "~!@#$%^&*()_+=[]<>?";   
        
	  // Act
      var isValid = dogFunc.checkName(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
    
    test('Dog Name: whitespace as first input', () => {
	  // Arrange
      var input = " ";   
        
	  // Act
      var isValid = dogFunc.checkName(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); //i made whitespace allowed muna, change this to toBeFalsy() if whitespace isnt allowed anymore
    })
	
	 test('Dog Name: input more than 30 characters', () => {
	  // Arrange
      var input = "My dogs name is Hamburger. He is so cute and fluffy!";   
        
	  // Act
      var isValid = dogFunc.checkName(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Special Conditions checker', () => {
    test('Special Conditions: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkCondition(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Special Conditions: input alphanumeric string', () => {
	  // Arrange
      var input = "5starsdog";   
        
	  // Act
      var isValid = dogFunc.checkCondition(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })

    test('Special Conditions: input special characters', () => {
	  // Arrange
      var input = "LOVE$$$!";   
        
	  // Act
      var isValid = dogFunc.checkCondition(input);
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
	
    test('Special Conditions: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkCondition(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Short Description checker', () => {
    test('Short Description: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkDescription(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Short Description: input alphanumeric string', () => {
	  // Arrange
      var input = "5starsdog";   
        
	  // Act
      var isValid = dogFunc.checkDescription(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })

    test('Short Description: input special characters', () => {
	  // Arrange
      var input = "LOVE$$$!";   
        
	  // Act
      var isValid = dogFunc.checkDescription(input);
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
	
    test('Short Description: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkDescription(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Dog Height checker', () => {
    test('Dog Height: valid input (more than 1)', () => {
	  // Arrange
      var input = "25";   
        
	  // Act
      var isValid = dogFunc.checkHeight(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('Dog Height: invalid input (less than 1)', () => {
	  // Arrange
      var input = "0";   
        
	  // Act
      var isValid = dogFunc.checkHeight(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })

    test('Dog Height: invalid input (negative numbers)', () => {
	  // Arrange
      var input = "-88";   
        
	  // Act
      var isValid = dogFunc.checkHeight(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
	
    test('Dog Height: valid input (decimal numbers more than 1)', () => {
	  // Arrange
      var input = "19.381";   
        
	  // Act
      var isValid = dogFunc.checkHeight(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
	
	test('Dog Height: invalid input (decimal numbers less than 1)', () => {
	  // Arrange
      var input = "-16.0779";   
        
	  // Act
      var isValid = dogFunc.checkHeight(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
});

describe('Dog Weight checker', () => {
    test('Dog Weight: valid input (more than 1)', () => {
	  // Arrange
      var input = "25";   
        
	  // Act
      var isValid = dogFunc.checkWeight(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('Dog Weight: invalid input (less than 1)', () => {
	  // Arrange
      var input = "0";   
        
	  // Act
      var isValid = dogFunc.checkWeight(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })

    test('Dog Weight: invalid input (negative numbers)', () => {
	  // Arrange
      var input = "-88";   
        
	  // Act
      var isValid = dogFunc.checkWeight(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
	
    test('Dog Weight: valid input (decimal numbers more than 1)', () => {
	  // Arrange
      var input = "19.381";   
        
	  // Act
      var isValid = dogFunc.checkWeight(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
	
	test('Dog Weight: invalid input (decimal numbers less than 1)', () => {
	  // Arrange
      var input = "-16.0779";   
        
	  // Act
      var isValid = dogFunc.checkWeight(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
});