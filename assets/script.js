// Assignment code here

// various arrays


var lowercase = 'abcdefghijklmnopqrstuvwxyz';

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var number = '1234567890';

var special = ' !#$%&()*+,-./:;<=>?@[\]^_`{|}~' + '"' + "'";



//prompt password length and verification
var length = function() {    
    //character number
    passwordLength = window.prompt('How many characters do you want in your password? Your password may be between 8 and 128 characters.');

    //validate prompt
    if(passwordLength > 7 && passwordLength < 129) {
        console.log(passwordLength);
    }
    else {
        window.alert('You need to provid a valid answer!');
        return length();
    }
}
length();
        
//prompts to select characters for password
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
        //characterPopulation += lowercase;
        characterPopulation += lowercase;
    }

    if (uppercaseSelectior) {
        // characterPopulation += uppercase;
        characterPopulation += uppercase;
    }

    if (numberSelector) {
        // characterPopulation += number;
        characterPopulation += number;
    }

    if (specialSelector) {
        // characterPopulation += special;
        characterPopulation += special;
    }

    return characterPopulation;
}
createPopulation();
console.log(characterPopulation);

// ensure at least 1 character from each chosen set is in the password
var atLeastOneCharacter = function() {
    passphrase = '';
    charCount = 0;

    //guarentees at least one charcater is chosen
    if (lowercaseSelector) {
        passphrase += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        charCount += 1;
    }

    if (uppercaseSelectior) {
        passphrase += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        charCount += 1;
    }

    if (numberSelector) {
        passphrase += number.charAt(Math.floor(Math.random() * number.length));
        charCount += 1;
    }

    if (specialSelector) {
        passphrase += special.charAt(Math.floor(Math.random() * special.length));
        charCount += 1;
    }

    return passphrase;
}
atLeastOneCharacter();

// select random characters from password
var selectRandomChar = function() {
    return characterPopulation[Math.floor(Math.random() * characterPopulation.length)];
    
}
selectRandomChar();

//generate password
var generatePassword = function() {
    passphrase = '';

    passphrase += atLeastOneCharacter();

    for (i = 0; i < passwordLength - charCount; i++) {
        passphrase += selectRandomChar(); 
     }

     return passphrase;
}
generatePassword();


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