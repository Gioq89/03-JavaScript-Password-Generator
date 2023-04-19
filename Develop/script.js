// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain? (must be between 8 and 128)");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password lentgh. Must be between 8 and 128 characters.")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
