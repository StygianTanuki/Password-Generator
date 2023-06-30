//hit btn prompt how many chars

//Validation > if less than 8 or more than 128 alert and restart

//if between 8 and 128 confirm lowercase
//confitm uppercase
//confirm numeric
//confirm special characters

//if yes add to array

//print password to screen

//////////////////////////////

// const NumArrary = [1,2,3,4,5,6,7,8,9,0]
// const special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];
// const tallLetter = capitolized letters
// const lowLetter = lowercase letters

//promts for password length, cap, lower, special, numbers

//if (passObj.count < 8 || passObj.count > 128 ) {
//   alert("That number is not between 8 and 128.  Please enter a correct number.");

//function buildPassword() {

// if want caps then concat caps to password

//console log password to confirm caps have been added

// if want lower then concat lower to password

//else {
//  passObj.upper = confirm("Tall Letters?");



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
