// Assignment Code: what each variable stores
var generateBtn = document.querySelector("#generate");
var lowerCaseAlphabet = "abcdefghijklmnopqrstvwxyz"; 
var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!&#$%}*+{[?|,:;_-]";
var passwordLength = " ";
var characterTypes = " ";


// Creating prompts, alerts, and confirmation depending on user input 
function generatePassword() {
  // First prompt - letting the user decide on how many characters they want in their password
   var passwordLength = (prompt("Please select a number from 8 to 128 for password length."));
   // If the user picks an amount that is not within the range, an alert will let the user know
   if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect input. Please select a number from 8 to 128 for password length.");
    // When the correct amount is selected, this will let the user pick what they want in the password
   } else if (passwordLength >= 8 && passwordLength <= 128) {
     console.log(passwordLength) // Logging the length of the password
    var confirmLowerCase = confirm("Would you like lower case letters in your password? Click 'OK' for yes. Click 'Cancel' for no.");
    var confirmUpperCase = confirm("Would you like upper case letters in your password? Click 'OK' for yes. Click 'Cancel' for no.");
    var confirmNumbers = confirm("Would you like numbers in your password? Click 'OK' for yes. Click 'Cancel' for no.");
    var confirmSpecialCharacters = confirm("Would you like special characters in you password? Click 'OK' for yes. Click 'Cancel' for no.")
    // Confirming that user selects at least one of the character types
   }if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
      alert("You must pick at least one character type.");
}
    // Confirming which characters that the user would want and when true will run with the for loop
    if (confirmLowerCase === true) {
      characterTypes = characterTypes.concat(lowerCaseAlphabet);
    } 
    if (confirmUpperCase === true) {
      characterTypes = characterTypes.concat(upperCaseAlphabet);
  }
    if (confirmNumbers === true) {
      characterTypes = characterTypes.concat(numbers);
    }
    if (confirmSpecialCharacters === true) {
      characterTypes = characterTypes.concat(specialCharacters);
    } 

    // Generating a random password from the length choice and user's confirmation from character types
    var passwordText = " " // To give variable a definition, without this application pops up error message
    for (var i = 0; i < passwordLength; i++) {
      passwordText = passwordText + characterTypes[Math.floor(Math.random() * characterTypes.length)];
      //console.log(password)
    } return passwordText; 
  
}
  
// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // When clicking the button, something is to happen
