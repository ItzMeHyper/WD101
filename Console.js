/*Javascript file 
for the webpage*/

let password = "abcd12";
let email = "example@gmail.com";
let isGmailAddress = email.includes("@gmail.com");


if (password.length >= 8) {
    console.log("Password is valid");
} else {
    console.log("Sorry, your password has to be at least 8 characters");
}


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


if (isGmailAddress) {
    console.log("Sorry, you cannot sign up with a @gmail.com address");
} else {
    console.log("This is not a @gmail.com address. So it is ok!");
}