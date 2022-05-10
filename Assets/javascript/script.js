// Assignment code here
function generatePassword() {
  var lowercasePW = "abcdefghijklmnopqrstuvwxyz";
  var uppercasePW = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersPW = "0123456789";
  var specialPW = "!@#$^&%*()+=-[]{}|:<>?,.";
  var newPassword = "";


    pickLength = prompt("How many characters would you like your new password to be? Pick between 8-128 characters");
    if (pickLength < 8 || pickLength > 128 || isNaN(pickLength)){
      prompt("Password value must be a NUMBER that is greater than 8 characters long and less than 128 characters!");
    }
    else {
      alert("Your password will be " + pickLength + " characters long.");
    }
    
    pickUppercase = confirm("Do you want your password to include UPPERCASE?");
    if (pickUppercase){
      alert("Your new password will include UPPERCASE letters");
    }
    else {
      alert("Your new password will NOT include UPPERCASE letters");
    }

  
    pickLowercase = confirm("Do you want your password to include lowercase?");
    if (pickLowercase){
      var makeLowercase = alert("Your new password will include lowercase letters");
    }
    else {
      alert("Your new password will NOT include lowercase letters");
    }

  
    pickNumber = confirm("Do you want your password to include numbers?");
    if (pickNumber){
      alert("Your new password will include numbers");
    }
    else {
      alert("Your new password will NOT include numbers");
    }

  
    pickSpecial = confirm("Do you want your password to include special characters?");
    if (pickSpecial){
      alert("Your new password will include special characters");
    }
    else {
      alert("Your new password will NOT include special characters");
    }
    if (pickLowercase === false && pickUppercase === false && pickNumber === false && pickSpecial === false) {
      return "Please select at least one character type.";
    };
  
    // group selected characters
    if (pickLowercase) {
      newPassword = newPassword.concat(lowercasePW);
    }
    if (pickUppercase) {
      newPassword = newPassword.concat(uppercasePW);
    }
    if (pickNumber) {
      newPassword = newPassword.concat(numbersPW);
    }
    if (pickSpecial) {
      newPassword = newPassword.concat(specialPW);
    }
        // pick random cards out of new pool for length of password
        let finalPassword = ""
        for (let i = 0; i < pickLength; i++) {
          let rng =[Math.floor(Math.random() * newPassword.length)];
          // or finalPassword += possibleCharacters[rng];
          finalPassword = finalPassword + newPassword[rng];
        }
        return finalPassword;
      };
      
      // Get references to the #generate element
      var generateBtn = document.querySelector("#generate");
      
      // Write password to the #password input
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
    
        passwordText.value = password;
      }
    
      function copyFunction() {
        /* Get the text field */
        var copyText = document.getElementById("password");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }
      
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
      
      