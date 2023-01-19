
//recieve and respond to user's string
function getValues() {
    let inputString = document.getElementById('userString').value;
    let results = checkForPalindrome(inputString);
    displayResults(results, inputString);
}



//Determine if string is palindrome
function checkForPalindrome(inputString) {
    inputString = inputString.toLowerCase();

    const regex = /[^a-z0-9]/gi;
    inputString = inputString.replace(regex, "");

    let reversedString = reverseString(inputString);


    return inputString == reversedString;

}


function reverseString(inputString) {
    let reversedString = '';

    for (let index = inputString.length - 1; index >= 0; index--) {
        reversedString += inputString[index];
    }
    return reversedString
}


//Display message to user to show
//if string is Palindrome or not
function displayResults(results, inputString) {
    let alert = document.getElementById('alert');

    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-success');

    let messageElement = document.getElementById('message');

    if (results == true) {
        alert.classList.add('alert-success');
        messageElement.textContent = "Hooray! A Palindrome!";
    } else {
        alert.classList.add('alert-danger');
        messageElement.textContent = "Boooo not a palindrome.";
    }

    let resultsElement = document.getElementById('results');
    //REGEX 
    inputString = inputString.toLowerCase();

    const regex = /[^a-z0-9]/gi;
    inputString = inputString.replace(regex, "");

    let reversedString = reverseString(inputString);
    resultsElement.textContent = reversedString;

    alert.classList.remove('invisible');
}