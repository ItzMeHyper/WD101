let printPasswordStatus = (password1, password2) => {
    let isMatchingPasswords = password1 === password2;
    let isRequiredLength = password1.length >= 8;

    let isValidPassword = isMatchingPasswords && isRequiredLength;

    if (isValidPassword) {
        console.log("This password is valid");
    } else {
        console.log("Sorry, this password is invalid!");
        if (!isMatchingPasswords) {
            console.log("Fix: The passwords do not match each other");
        }
        if (!isRequiredLength) {
            console.log("Fix: The password should be at least # characters long.");
        }
    }
};
let password1 = "abcd123456";
let password2 = "abcd123456";

//printPasswordStatus(pass1, pass2);
printPasswordStatus("abcdqwerty", "abcdqwrty");