// Get the elements from the HTML
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');

// Allowed characters for the password
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Function to generate a random password
function generatePassword(length) {
    let password = '';

    // Loop to generate a random password
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Add an event listener to the generate button
generateButton.addEventListener('click', function () {
    let newPassword = generatePassword(12);
    passwordDisplay.value = newPassword;
});