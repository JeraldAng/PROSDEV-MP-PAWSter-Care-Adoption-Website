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

describe('Signup Email checker', () => {
    test('signup email: input valid email', () => {
	  // Arrange
      var input = "robin_hood@gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
	
	test('signup email: input valid alphanumeric email', () => {
	  // Arrange
      var input = "rob1n_hood09@gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
    
    test('signup email: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('signup email: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('signup email: no "@"', () => {
	  // Arrange
      var input = "robin_hood.gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('signup email: no "." after "@"', () => {
	  // Arrange
      var input = "robin_hood@yahoo";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('signup email: no spaces', () => {
	  // Arrange
      var input = "robin hood@yahoo.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    /*test('edit email: no special characters', () => {
	  // Arrange
      var input = "P4sSw0rd258";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit password: less than 8 valid characters', () => {
	  // Arrange
      var input = "P@w0r?";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    }) */
}); 
