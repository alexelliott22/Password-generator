// Assignment code here

// various arrays
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

var arraySelector = [lowercase, uppercase, number, special];

//prompt password length and verification
var length = function() {    
    //character number
    var promptLength = window.prompt('How many characters do you want in your password? Your password may be between 8 and 128 characters.');

    //validate prompt
    if(promptLength > 7 && promptLength < 129) {
        console.log(promptLength);
    }
    else {
        window.alert('You need to provid a valid answer!');
        return length();
    }
}
length();
 

//store input value so we know how many characters to make the password 

//prompt what type of characters they want in their password & make sure at least 1 type is selected



//character type questions
/*var charLowercase = function() {    
    
    if(lowercaseSelector) {
        var lowercaseRandom = lowercase[Math.floor(Math.random()*lowercase.length)];
        console.log(lowercaseRandom);
        return true;
    }
    return false;
}

var charUppercase = function() { 
    
    if(uppercaseSelection) {
        var uppercaseRandom = uppercase[Math.floor(Math.random()*uppercase.length)];
        console.log(uppercaseRandom);
        return true;
    }
    return false;
}

var charNum = function() {
    
    if(numberSelector) {
        var numberRandom = number[Math.floor(Math.random()*number.length)];
        console.log(numberRandom);
        return true;
    }
    return false;
}

var charSpecial = function() {
    
    if(specialSelector) {
        var specialRandom = special[Math.floor(Math.random()*special.length)];
        console.log(specialRandom);
        return true;
    }
    return false;
}*/

var writePassword = function() {
    //prompt which characters you want
    var lowercaseSelector = window.confirm('Do you want Lowercase letters?');
    var uppercaseSelectior = window.confirm('Do you want Uppercase letters?');
    var numberSelector = window.confirm('Do you want Numbers?');
    var specialSelector = window.confirm('Do you want Special characters?');

    //check for a return true in at least one character
    if(lowercaseSelector || uppercaseSelectior || numberSelector || specialSelector) {
       return true; 
    }
    else {
        window.alert('You must chose "Ok" to at least one of the following choices: "Lowercase letters, Uppercase letters, Numbers, or Special characters.')
        return writePassword();
    }

    for (i = 1; i < promptLength; i++) {
        
    }
}
writePassword();


//make sure at least 1 character is chosen
    //if not chosen return them to the begining of the function

//be able to randomly select which array 
//be able to randomly select from arrays
//loop as many times as needed








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);