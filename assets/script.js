// Assignment code here

// various arrays


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];



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
        


var selectCharacters = function() {
    //prompt which characters you want
    lowercaseSelector = window.confirm('Do you want Lowercase letters?');
    uppercaseSelectior = window.confirm('Do you want Uppercase letters?');
    numberSelector = window.confirm('Do you want Numbers?');
    specialSelector = window.confirm('Do you want Special characters?');

    //check that at least 1 character is chosen or return an error
    if(lowercaseSelector || uppercaseSelectior || numberSelector || specialSelector) {
       return true; 
    }
    else {
        window.alert('ERROR: You must chose "Ok" to at least one of the following choices: "Lowercase letters, Uppercase letters, Numbers, or Special characters.')
        return selectCharacters();
    }
}
selectCharacters();

//create password array with character population
var createPopulation = function() {
    characterPopulation = [];
    
    if (lowercaseSelector) {
        characterPopulation += lowercase;
    }

    if (uppercaseSelectior) {
        characterPopulation += uppercase;
    }

    if (numberSelector) {
        characterPopulation += number;
    }

    if (specialSelector) {
        characterPopulation += special;
    }

    return characterPopulation;
}

// ensure at least 1 character from each chosen set is in the password
var atLeastOneCharacter = function() {
    password = '';

    //guarentees at least one charcater is chosen
    if (lowercaseSelector) {
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }

    if (uppercaseSelectior) {
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }

    if (numberSelector) {
        password += number[Math.floor(Math.random() * number.length)];
    }

    if (specialSelector) {
        password += special[Math.floor(Math.random() + special.length)];
    }

    return password;
}


// select random characters from password
var selectRandomChar = function() {

    for (i = 0; i < promptLength; i++) {
       password += characterPopulation[Math.floor(Math.random() * characterPopulation.length)]; 
    }
}
createPassword();





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