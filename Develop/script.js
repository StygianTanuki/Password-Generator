// These are declared globally
const NumArrary = [1,2,3,4,5,6,7,8,9,0];
const special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];
const tallLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword () {
  var genOptions = []
  // This will show a prompt to the user once they click on the button
  // parseInt will convert the prompt into numbers
  var genLength = prompt("Enter the length of the Password (Between 8 to 128 characters): ");


  // Utilizes the cancel button to stop the process if user did not want to generate password
  // This allows the flow of the code to be more mainstreamed
  if (genLength === null) {
    // Use empty quotes to keep the message the same within the prompt
    return "";
  }

  genLength = parseInt(genLength);

  // || is an Or operator. To section an item you would put it as two seperate items on the same line
  // Putting the genLength in () with ! will allow letters to be invalid in the prompt
  if (!(genLength > 7 && genLength < 129)) {
    alert ("Please choose a valid length");
    return "";
  }


// Create a section for each question with its own variable and if statement to collect the items for the overall array
// Upper Case Section
var genUpper = confirm ("Would you like uppercase characters?");
  if (genUpper) {
    //concat keeps the original array and adds in
    genOptions = genOptions.concat(tallLetter);
  }

  // Lower Case Section
  var genLower = confirm ("Would you like lower case characters?");
  if (genLower) {
    genOptions = genOptions.concat(lowLetter);
  }

  // Special Character Section
  var genSpecial = confirm ("Would you like special characters?");
  if (genSpecial) {
    genOptions = genOptions.concat(special);
  }

  // Number Section
  var genNum = confirm ("Would you like numbers?");
  if (genNum) {
    genOptions = genOptions.concat(NumArrary);
  }

  // The console will log all the options
  console.log(genOptions);
  if (genOptions.length === 0) {
    alert ("Please choose at least one selection.");
    return "";
  }

  // genOptions will be used with however much is stored in it

  // the options selected in the for loop wll be placed into the password var until it reaches however long the length was selected
  var password = ""
  for (var i = 0; i < genLength; i++) {
  password += genOptions [Math.floor(Math.random() * genOptions.length)]

  }
  // Password will be finished after the loop
  return password;

}

// This section will write teh password out into the box for the user to look at
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
