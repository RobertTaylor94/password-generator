// // Array of special characters to be included in password
// var specialCharacters = [
//     '@',
//     '%',
//     '+',
//     '\\',
//     '/',
//     "'",
//     '!',
//     '#',
//     '$',
//     '^',
//     '?',
//     ':',
//     ',',
//     ')',
//     '(',
//     '}',
//     '{',
//     ']',
//     '[',
//     '~',
//     '-',
//     '_',
//     '.'
//   ];
  
//   // Array of numeric characters to be included in password
//   var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
//   // Array of lowercase characters to be included in password
//   var lowerCasedCharacters = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z'
//   ];
  
//   // Array of uppercase characters to be included in password
//   var upperCasedCharacters = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z'
//   ];

  const characters = {
    specialCharacters: [
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
      ],
    numericCharacters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lowerCasedCharacters: [
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
      ],
    upperCasedCharacters: [
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
      ]
  }
  
  var passwordOption = {
    length: "",
    lowerCasedCharacters: false,
    upperCasedCharacters: false,
    specialCharacters: false,
    numericCharacters: false
  }

  var selectedOptions = []
  
  // Function to prompt user for password options
  function getPasswordOptions() {

    do { //asks the user how long the password should be until it satisfies the criteria of being a number between 10 and 64
        passwordOption.length = prompt("How long should your password be? (Between 10 and 64 characters)")
    } while ((isNaN(passwordOption.length)) || (passwordOption.length < 10) || (passwordOption.length > 64))

    do { //asks the user which character sets they'd like to use. 
        passwordOption.lowerCasedCharacters = confirm("Should the password contain lowercase characters?")
        passwordOption.upperCasedCharacters = confirm("Should the password contain uppercase characters?")
        passwordOption.specialCharacters = confirm("Should the password contain special characters?")
        passwordOption.numericCharacters = confirm("Should the password contain numbers?")
    
    } while /* ensures at least one character set is chosen */ ((passwordOption.lowerCasedCharacters === false) && (passwordOption.upperCasedCharacters === false) && (passwordOption.specialChararcters === false) && (passwordOption.numericCharacters === false))

    for (option in passwordOption) {
        if (passwordOption[option] === true) {
            selectedOptions.push(option)
            console.log(selectedOptions)
        }
      }

  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    var element = arr[randomIndex]
    return element
  }
  
  // Function to generate password with user input
  function generatePassword() {
    getPasswordOptions()

    var password = ""

    // add one random character to the password for the requested length
    for (i = 0; i < passwordOption.length; i++) {
        randomArray = getRandom(selectedOptions)
        password += getRandom(characters[`${randomArray}`])
    }
    return password
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    password = ""
    selectedOptions = []
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);