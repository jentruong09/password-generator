// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = " !&#$%)(*+?\|:;_-<>,.^"


function generatePassword() {
  prompt("Please select a number from 8 to 128 for password length.")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

if (password < 8 || password > 128) {
  alert("Incorrect input. Please select a number from 8 to 128 for password length.")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);