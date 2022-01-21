// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = " !&#$%)(*+?\|:;_-<>,.^";
var passwordLength = " "

function generatePassword() {
   var passwordLength = (prompt("Please select a number from 8 to 128 for password length."));
   
   if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect input. Please select a number from 8 to 128 for password length.");
  } 
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);