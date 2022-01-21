// Assignment Code: what each variable stores
var generateBtn = document.querySelector("#generate");
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = " !&#$%)(*+?\|:;_-<>,.^";
var passwordLength = " ";


function generatePassword() {
   var passwordLength = (prompt("Please select a number from 8 to 128 for password length."));
   
   if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect input. Please select a number from 8 to 128 for password length.");
   
   } else if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmLowerCase = confirm("Would you like lower case letters in your password?");
    var confirmUpperCase = confirm("Would you like upper case letters in your password?");
    var confirmNumbers = confirm("Would you like numbers in your password?");
    var confirmSpecialCharacters = confirm("Would you like special characters in you password?")
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