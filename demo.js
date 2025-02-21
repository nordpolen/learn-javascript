// Create an input element
const input = document.createElement('input');
input.type = 'text';
input.id = 'userInput';
document.body.appendChild(input);

// Create a button element
const button = document.createElement('button');
button.innerText = 'Submit';
button.id = 'submitButton';
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    console.log('User input:', userInput);
});