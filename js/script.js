// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  var length = ""
  var lowerCase = false
  var upperCase = false
  var specialChar = false
  var numberChar = false
  
  // Function to prompt user for password options
  function getPasswordOptions() {

    do { //asks the user how long the password should be until it satisfies the criteria of being a number between 10 and 64
        length = prompt("How long should your password be? (Between 10 and 64 characters)")
    } while ((isNaN(length)) || (length < 10) || (length > 64))

    do {
        var lowerCase = confirm("Should the password contain lowercase characters?")
        var upperCase = confirm("Should the password contain uppercase characters?")
        var specialChar = confirm("Should the password contain special characters?")
        var numberChar = confirm("Should the password contain numbers?")
    } while ( (lowerCase === false) && (upperCase === false) && (specialChar === false) && (numberChar === false)  )

    console.log(length, lowerCase, upperCase, specialChar, numberChar)
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    var element = arr[randomIndex]
    return element
  }
  
  // Function to generate password with user input
  function generatePassword() {
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    getPasswordOptions()
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);