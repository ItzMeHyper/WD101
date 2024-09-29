// Save this snippet as `passphrase.js` before uploading it on Pupilfirst LMS.
let isValidPassphrase = (text) => {
    // Fill your code in here, within the braces { ... } of the function `isValidPassphrase`.
  
    // First step. Let's split the text into different words. How do we do that?
    let words = text.split(" "); // Split the input text by spaces to get individual words.
  
    // How do we ensure that there are four words?
    let minimumFourWords = words.length >= 4; // Check if there are at least four words.
  
    // Since the number of words in our passphrase is unknown, let's check each word,
    // regardless of how many there are.
    let minimumTwoCharsEach = words.every(word => word.length > 1); // Check if each word has more than one character.
  
    // Finally, let's check if both conditions are true...
    let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach; // Both conditions must be true.
  
    // Let's "return" the value from this function.
    return conditionsSatisfied; // Return the result as a boolean.
  }
  
  // Don't alter the `module.exports` line below - if you want to test your code, copy and
  // paste the function, starting from `let isValidPassphrase = ...` to the final closing
  // brace `}` into the browser's console, and call the function with different values.
  //
  // For example: `isValidPassphrase("this should be enough")`
  //
  // IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
  // file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
  // function and use it.
  module.exports = isValidPassphrase;
  