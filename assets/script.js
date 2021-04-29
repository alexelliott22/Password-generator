// Assignment code here

// various arrays
/*var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

var arraySelector = [lowercase, uppercase, number, special];*/

//prompt password length and verification
var length = function() {    
    //character number
    promptLength = window.prompt('How many characters do you want in your password? Your password may be between 8 and 128 characters.');

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




        //select random index from array
        var lowercaseRandom = lowercase[Math.floor(Math.random()*lowercase.length)];
        var uppercaseRandom = uppercase[Math.floor(Math.random()*uppercase.length)];
        var numberRandom = number[Math.floor(Math.random()*number.length)];
        var specialRandom = special[Math.floor(Math.random()*special.length)];


var selectCharacters = function() {
    //prompt which characters you want
    var lowercaseSelector = window.confirm('Do you want Lowercase letters?');
    var uppercaseSelectior = window.confirm('Do you want Uppercase letters?');
    var numberSelector = window.confirm('Do you want Numbers?');
    var specialSelector = window.confirm('Do you want Special characters?');

    //check that at least 1 character is chosen or return an error
    if(lowercaseSelector || uppercaseSelectior || numberSelector || specialSelector) {
       return true; 
    }
    else {
        window.alert('ERROR: You must chose "Ok" to at least one of the following choices: "Lowercase letters, Uppercase letters, Numbers, or Special characters.')
        return writePassword();
    }
}
selectCharacters();

var writePassword = function() {
    
    for (i = 0; i < promptLength; i++) {
        
    }
}
writePassword();

//be able to randomly select which array 
//be able to randomly select from arrays


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