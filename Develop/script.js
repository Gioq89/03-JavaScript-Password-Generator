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

  // alert in case user selects wrong password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Must be between 8 and 128 characters.");
    return;
  }

  // add confirms to ask which types of characters should be included "I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters"
  var lowercase = confirm("Do you want lowercase letters included?");
  var uppercase = confirm("Do you want uppercase letters included?");
  var numberic = confirm("Do you want numbers included?");
  var specialCharacters = confirm("Do you want special characters included?");

  // alert in case user doesn't select any character types "my input should be validated and at least one character type should be selected"
  if(!lowercase && !uppercase && !numberic && !specialCharacters) {
    alert("Invalid password. Must include at least one character type.");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
