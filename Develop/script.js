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