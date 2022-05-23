// Assignment code here

//main elements


 
//generate password function



//random generated character functions 


function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  console.log(getRandomUpper());

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    console.log(getRandomNumber());

    function getRandomSymbol() {
      const symbols = '!@?&%$#';
      return symbols [Math.floor(Math.random() * symbols.length)];
      }
      console.log(getRandomSymbol());


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
 










