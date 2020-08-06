// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/signup');

// This is so that function calls to HTML elements will not return null
document.body.innerHTML =
        '<p id="letter" class="invalid">' + '</p>' +
        '<p id="capital" class="invalid">' + '</p>' +
        '<p id="number" class="invalid">' + '</p>' +
        '<p id="length" class="invalid">' + '</p>' +
        '<p id="special" class="invalid">' + '</p>';

describe('Signup Username checker', () => {
    test('username: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('username: input alphanumeric string', () => {
	  // Arrange
      var input = "Username45";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('username: input admin', () => {
	  // Arrange
      var input = "admin";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
        expect(isValid).toBeFalsy();  
    })
    
    test('username: input special characters', () => {
	  // Arrange
      var input = "Us3rn@me";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
    
    test('username: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Signup Password checker', () => {
    test('password: input valid password', () => {
	  // Arrange
      var input = "P@ssw0rd";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
    
    test('password: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('password: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('password: no lowercase letter', () => {
	  // Arrange
      var input = "P@SSW0RD";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('password: no uppercase letter', () => {
	  // Arrange
      var input = "p@ssw0rd";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('password: no number input', () => {
	  // Arrange
      var input = "P@sswoRD";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('password: no special characters', () => {
	  // Arrange
      var input = "Passw0rd";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('password: less than 8 valid characters', () => {
	  // Arrange
      var input = "P@sw0rd";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});