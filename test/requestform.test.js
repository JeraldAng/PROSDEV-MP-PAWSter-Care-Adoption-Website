// import jQuery to test so that it will recognize jQuery commands
global.jQuery = require('../public/js/jquery');
global.$ = global.jQuery;

// dogFunc will contain all exported functions 
const dogFunc = require('../public/js/requestform');

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

describe('Request Form - Email checker', () => {
    test('request form email: input valid email', () => {
	  // Arrange
      var input = "robin_hood@yahoo.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
	
	test('request form email: input valid alphanumeric email', () => {
	  // Arrange
      var input = "rob1n_hood09@gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeTruthy();   
    })
    
    test('request form email: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('request form email: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('request form email: no "@"', () => {
	  // Arrange
      var input = "robin_hood.gmail.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('request form email: no "." after "@"', () => {
	  // Arrange
      var input = "robin_hood@yahoo";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
    test('request form email: no spaces', () => {
	  // Arrange
      var input = "robin hood@yahoo.com";   
        
	  // Act
      var isValid = dogFunc.checkEmail(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
    
});

describe('Address checker', () => {
    test('Address: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkAddress(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Address: input alphanumeric string', () => {
	  // Arrange
      var input = "5starsdog";   
        
	  // Act
      var isValid = dogFunc.checkAddress(input);
      
	  // Assert
       expect(isValid).toBeTruthy();
    })
    
    test('Address: input valid address with spaces', () => {
	  // Arrange
      var input = "I rate this dog a perfect score";   
        
	  // Act
      var isValid = dogFunc.checkAddress(input);
      
	  // Assert
        expect(isValid).toBeTruthy();  
    })

    test('Address: input special characters', () => {
	  // Arrange
      var input = "LOVE$$$!";   
        
	  // Act
      var isValid = dogFunc.checkAddress(input);
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })
	
    test('Address: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkAddress(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});

describe('Phone number checker', () => {
    test('Phone Number: null input', () => {
	  // Arrange
      var input = "";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Phone Number: input alphanumeric string', () => {
	  // Arrange
      var input = "555Dog";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
	
	test('Phone Number: input letters', () => {
	  // Arrange
      var input = "phone";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
       expect(isValid).toBeFalsy();
    })
    
    test('Phone Number: input valid phone number', () => {
	  // Arrange
      var input = "09258856138";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
        expect(isValid).toBeTruthy();  
    })

    test('Phone Number: input special characters', () => {
	  // Arrange
      var input = "*@123$?'!";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
        expect(isValid).toBeFalsy(); 
    })
	
	/*test('Phone Number: input valid special characters', () => {
	  // Arrange
      var input = "(01)555-355";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
        expect(isValid).toBeTruthy(); 
    })*/
	
    test('Phone Number: input only whitespace', () => {
	  // Arrange
      var input = "           ";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
	
	test('Phone Number: input more than 11 characters', () => {
	  // Arrange
      var input = "123456789-1012345";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
	
	test('Phone Number: input with spaces', () => {
	  // Arrange
      var input = "123 456 789";   
        
	  // Act
      var isValid = dogFunc.checkNum(input);
      
	  // Assert
        expect(isValid).toBeFalsy();   
    })
});


