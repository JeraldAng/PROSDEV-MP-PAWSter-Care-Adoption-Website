// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/editprofile');

// This is so that function calls to HTML elements will not return null
document.body.innerHTML =
        '<p id="letter" class="invalid">' + '</p>' +
        '<p id="capital" class="invalid">' + '</p>' +
        '<p id="number" class="invalid">' + '</p>' +
        '<p id="length" class="invalid">' + '</p>' +
        '<p id="special" class="invalid">' + '</p>';

describe('Edit Username checker', () => {
    test('username: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('edit username: input alphanumeric string', () => {
	  // Arrange
      var input = "UsernameTesting118";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('edit username: input admin', () => {
	  // Arrange
      var input = "admin";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
        expect(isValid).toBeFalsy();  
    })
    
    test('edit username: input special characters', () => {
	  // Arrange
      var input = "Us3rn@m3Testing11&";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
    
    test('edit username: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkUsername(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Edit Password checker', () => {
    test('edit password: input valid password', () => {
	  // Arrange
      var input = "#P@Ssw0rd";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
    
    test('edit password: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('edit password: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit password: no lowercase letter', () => {
	  // Arrange
      var input = "#P@SSW0RD!";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit password: no uppercase letter', () => {
	  // Arrange
      var input = "#p@ssw0rd!";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit password: no number input', () => {
	  // Arrange
      var input = "#P@ssWoRD!";   
        
	  // Act
      var isValid = dogFunc.checkPassword(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit password: no special characters', () => {
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
    })
});

describe('Edit Email checker', () => {
    test('edit email: input valid email', () => {
	  // Arrange
      var input = "robinhood@gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
	
	test('edit email: input valid alphanumeric email', () => {
	  // Arrange
      var input = "robin_hood09@gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
    
    test('edit email: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('edit email: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit email: no "@"', () => {
	  // Arrange
      var input = "robin_hood.gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit email: no "." after "@"', () => {
	  // Arrange
      var input = "robin_hood@yahoo";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit email: no spaces', () => {
	  // Arrange
      var input = "robin hood@yahoo.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('edit email: no special characters', () => {
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
    }) 
}); 

