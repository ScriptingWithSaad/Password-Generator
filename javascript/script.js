const passwordBox = document.getElementById("password");
length = 13;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + symbols + numbers;

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}