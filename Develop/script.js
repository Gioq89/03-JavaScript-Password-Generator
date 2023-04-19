// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // add prompt to ask length of password to be inputed "I am presented with a series of prompts for password criteria and length of the password"
  var passwordLength = prompt("How many characters would you like your password to contain? (must be between 8 and 128)");

  // add confirms to ask which types of characters should be included "I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters"
  var lowercase = confirm("Do you want lowercase letters included?");
  var uppercase = confirm("Do you want uppercase letters included?");
  var numberic = confirm("Do you want numbers included?");
  var specialCharacters = confirm("Do you want special characters included?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password lentgh. Must be between 8 and 128 characters.");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
