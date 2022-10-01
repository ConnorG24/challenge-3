// Assignment Code
var generateBtn = document.querySelector("#generate");
// convient way to to make the array for the critera 
const lowerCaseCodes = lowToHigh(97, 122);
const upperCaseCodes = lowToHigh(65, 90);
const numberCodes = lowToHigh(48, 57);
const specialCodes = lowToHigh(33, 47).concat(
  lowToHigh(58, 64)
).concat(
  lowToHigh(91, 96)
).concat(
  lowToHigh(123, 126)
); 
// Write password to the #password input
function writePassword() {
 //Prompt for lower case
   includeLower = window.prompt("Include lowercase? Y or N");
 
  if (!includeLower){
    return; 
  }
  includeLower = includeLower.toUpperCase();
  if (includeLower === "Y"){
    includeLower = true;
  }else{
    includeLower = false;
  }
  //promt for Uppercase
  var includeUpper = window.prompt("Include uppercase? Y or N");
 
  if (!includeUpper){
    return; 
  }
  includeUpper = includeUpper.toUpperCase();
  if (includeUpper === "Y"){
    includeUpper = true;
  }else{
    includeUpper = false;
  }
//promt for number
  var includeNumber = window.prompt("Include Numbers? Y or N");
 
  if (!includeNumber){
    return; 
  }
  includeNumber = includeNumber.toUpperCase();
  if (includeNumber === "Y"){
    includeNumber = true;
  }else{
    includeNumber = false;
  }
//promt for special chara
var includeSpecial = window.prompt("Include special characters? Y or N");
 
  if (!includeSpecial){
    return; 
  }
  includeSpecial = includeSpecial.toUpperCase();
  if (includeSpecial === "Y"){
    includeSpecial = true;
  }else{
    includeSpecial = false;
  }
  // promt for when no criteria selected
  if (!includeLower && !includeUpper && !includeNumber && !includeSpecial){
    window.alert("Bro, you NEED to at least select ONE of the prievous options for this to work.")
    return; 
  } 
//promt for lengeth
var charaLength = window.prompt("Choose password length between 8 and 128")
if (!charaLength){
  return;
}
if (charaLength < 8){
  charaLength === 8;
}
if (charaLength > 128){
  charaLength === 128;
} 
  

var password = generatePassword(includeLower,includeUpper,includeNumber,includeSpecial, charaLength);{
    
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(includeLower,includeUpper,includeNumber,includeSpecial, charaLength){
  let charaCodes = []; 
  if (includeLower) charaCodes = charaCodes.concat (lowerCaseCodes);
  if (includeUpper) charaCodes = charaCodes.concat (upperCaseCodes);
  if (includeNumber) charaCodes = charaCodes.concat (numberCodes);
  if (includeSpecial) charaCodes = charaCodes.concat (specialCodes);
  const passwordChara = []  
  for (let i = 0; i < charaLength; i++){
    const character = charaCodes[Math.floor(Math.random() * charaCodes.length)]
    passwordChara.push(String.fromCharCode(character))
  }
  return passwordChara.join('')
}
// function to help automate the arrays needed to generate password 
function lowToHigh(low, high){
  array = [];
  for (let i = low; i <= high; i++){
    array.push(i);
  }
  return array; 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
