
//Chrstopher White II Assignment 3.2 1-31-26
// Select the form element by its ID so we can attach a property handler
const form = document.getElementById('userForm');

// Select the message container where validation feedback will be shown
const messageDiv = document.getElementById('message');

// Select the secret container where the secret will be revealed upon success
const secretDiv = document.getElementById('secret');

// Define a named validation function that will be assigned to form.onsubmit
// to prevent the browser's default form submission (keeping the page visible).
function validateForm() {
    // Clear any previous messages or revealed secrets from prior attempts
    messageDiv.innerHTML = '';
    secretDiv.innerHTML = '';

    // Read the first name input value and remove surrounding whitespace
    // Read the raw first name input and trim leading/trailing whitespace
    const firstRaw = document.getElementById('firstName').value.trim();

    // Read the raw last name input and trim leading/trailing whitespace
    const lastRaw = document.getElementById('lastName').value.trim();

    // Collapse any internal runs of whitespace to a single space for each name
    const first = firstRaw.replace(/\s+/g, ' ');
    const last = lastRaw.replace(/\s+/g, ' ');

    // Combine the sanitized first and last name with a single space
    const fullName = (first + ' ' + last).trim();

    // If the combined name has more than 20 characters, display a warning
    // and return false to stop further processing and prevent submission
    // Enforce that the combined name length does not exceed 20 characters
    if (fullName.length > 20) {
        // Calculate how many characters over the limit the full name is
        const over = fullName.length - 20;
        messageDiv.innerHTML = '<p class="warning">Warning: Full name is ' + fullName.length + ' characters long (limit 20). Please shorten it by ' + over + ' character' + (over === 1 ? '' : 's') + '.</p>';
        return false;
    }

    // Read the zip code input and trim whitespace
    const zip = document.getElementById('zipCode').value.trim();

    // Check zip code validity: exactly 5 digits
    const zipIsValid = /^\d{5}$/.test(zip);

    // If zip code is invalid, show an error and prevent submission
    if (!zipIsValid) {
        messageDiv.innerHTML = '<p class="warning">Error: Zip code must be exactly 5 digits (e.g. 12345).</p>';
        return false;
    }

    // Both validations passed; display a success message using innerHTML
    messageDiv.innerHTML = '<p class="success">Hello, ' + fullName + ' your input looks good.</p>';

    // Reveal the secret message inside the page using innerHTML (no alerts)
    secretDiv.innerHTML = '<div class="secret-box"><h2>Secret Message</h2><p>Congrats! You unlocked the secret: "Curiosity fuels creativity."</p></div>';

    // Return false to prevent the browser from submitting the form to a server
    return false;
}

// Assign the named function to the form's onsubmit property to handle submission 
form.onsubmit = validateForm;
// =====================================
// PALINDROME CHECKER CODE
// =====================================

// Get button element
const startBtn = document.getElementById("startBtn");

// Get results div
const resultsDiv = document.getElementById("palResults");

// When button clicked
startBtn.onclick = function () {

    // Loop control variable
    let keepGoing = true;

    // Loop until user quits
    while (keepGoing) {

        // Ask user for a string
        let userInput = prompt("Enter a word or phrase:");

        // If cancel pressed
        if (userInput === null) {
            break;
        }

        // Remove spaces + lowercase
        let cleaned = userInput.replace(/\s+/g, "").toLowerCase();

        // Reverse string
        let reversed = cleaned.split("").reverse().join("");

        // Check palindrome
        let isPalindrome = cleaned === reversed;

        // Display result
        if (isPalindrome) {
            resultsDiv.innerHTML += `<p class="success">"${userInput}" is a palindrome!</p>`;
            alert(userInput + " IS a palindrome!");
        } else {
            resultsDiv.innerHTML += `<p class="warning">"${userInput}" is NOT a palindrome.</p>`;
            alert(userInput + " is NOT a palindrome.");
        }

        // Ask user if they want another word
        let again = confirm("Enter another word?");

        if (!again) {
            keepGoing = false;
        }
    }

    alert("Palindrome checker finished.");
};
