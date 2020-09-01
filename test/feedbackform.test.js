// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/feedbackform');

// This is so that function calls to HTML elements will not return null
document.body.innerHTML =
        '<p id="letter" class="invalid">' + '</p>' +
        '<p id="capital" class="invalid">' + '</p>' +
        '<p id="number" class="invalid">' + '</p>' +
        '<p id="length" class="invalid">' + '</p>' +
        '<p id="special" class="invalid">' + '</p>';

describe('Name checker', () => {
    test('First Name: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "lastname");
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
	
	test('Last Name: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "firstname");
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('First Name: input alphanumeric string', () => {
	  // Arrange
      var input = "Michael88";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "lastname");
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
	
	test('Last Name: input alphanumeric string', () => {
	  // Arrange
      var input = "J4ck5on";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "firstname");
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('First Name: input valid name with spaces', () => {
	  // Arrange
      var input = "Gloria Macapagal";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "lastname");
      
	  // Assert
        expect(isValid).toBeTruthy();  
    })
	
	test('Last  Name: input valid name with spaces', () => {
	  // Arrange
      var input = "Last Name Here";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "firstname");
      
	  // Assert
        expect(isValid).toBeTruthy();  
    })
    
    test('First Name: input special characters', () => {
	  // Arrange
      var input = "Ari@na_Gr&nde!";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "lastname");
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
	
	test('Last Name: input special characters', () => {
	  // Arrange
      var input = "Ari@na_Gr&nde!";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "firstname");
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
    
    test('First Name: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "lastname");
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
	
	test('Last Name: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkName(input, "firstname");
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Feedback checker', () => {
    test('Feedback: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkFeedbackText(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Feedback: input alphanumeric string', () => {
	  // Arrange
      var input = "5starsdog";   
        
	  // Act
      var isValid = dogFunc.checkFeedbackText(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('Feedback: input valid feedback with spaces', () => {
	  // Arrange
      var input = "I rate this dog a perfect score";   
        
	  // Act
      var isValid = dogFunc.checkFeedbackText(input);
      
	  // Assert
        expect(isValid).toBeTruthy();  
    })

    test('Feedback: input special characters', () => {
	  // Arrange
      var input = "LOVE$$$!";   
        
	  // Act
      var isValid = dogFunc.checkFeedbackText(input);
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
	
    test('Feedback: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkFeedbackText(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Feedback Email checker', () => {
    test('feedback email: input valid email', () => {
	  // Arrange
      var input = "robin_hood@yahoo.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
	
	test('feedback email: input valid alphanumeric email', () => {
	  // Arrange
      var input = "rob1n_hood09@gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
    
    test('feedback email: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('feedback email: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('feedback email: no "@"', () => {
	  // Arrange
      var input = "robin_hood.gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('feedback email: no "." after "@"', () => {
	  // Arrange
      var input = "robin_hood@yahoo";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('feedback email: no spaces', () => {
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
