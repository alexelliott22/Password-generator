// Assignment code here

// various arrays
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~']

//prompt password length and make sure they enter a valid answer
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
var charLowercase = function() {    
    var lowercaseSelector = window.confirm('Do you want lowercase letters?');
    if(lowercaseSelector) {
        var lowercaseRandom = lowercase[Math.floor(Math.random()*lowercase.length)];
        console.log(lowercaseRandom);
        return true;
    }
    return false;
}
charLowercase();

var charUppercase = function() { 
    var uppercaseSelectior = window.confirm('Do you want uppercase letters?');
    if(uppercaseSelection) {
        var uppercaseRandom = uppercase[Math.floor(Math.random()*uppercase.length)];
        console.log(uppercaseRandom);
        return true;
    }
    return false;
}
charUppercase();

var charNum = function() {
    var numberSelector = window.confirm('Do you want numbers?');
    if(numberSelector) {
        var numberRandom = number[Math.floor(Math.random()*number.length)];
        console.log(numberRandom);
        return true;
    }
    return false;
}
charNum();

var charSpecial = function() {
    var specialSelector = window.confirm('Do you want special characters?');
    if(specialSelector) {
        var specialRandom = special[Math.floor(Math.random()*special.length)];
        console.log(specialRandom);
        return true;
    }
    return false;
}
charSpecial();









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