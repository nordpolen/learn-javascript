// Get the elements from the HTML
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');
const copyButton = document.getElementById('copy');

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
    const length = parseInt(lengthInput.value, 10) || 12;
    const newPassword = generatePassword(length);
    passwordDisplay.value = newPassword;
});

copyButton.addEventListener('click', function () {
    const password = passwordDisplay.value;
    if (!password) return;

    navigator.clipboard.writeText(password).then(() => {
        copyButton.textContent = '✅';
        setTimeout(() => copyButton.textContent = '📋', 1500);
    }).catch(() => {
        alert('Kunde inte kopiera lösenordet.');
    });
});