const passwordElement = document.getElementById('password');
const inputContainer = document.getElementById('input-container');
const secretInput = document.getElementById('secret-input');
const centerText = document.getElementById('center-text');
const phrase = 'YOURPHRASE';  // Replace this with the phrase you want to show
let currentIndex = 0;
let textToggle = true;

passwordElement.addEventListener('click', () => {
    const interval = setInterval(() => {
        if (currentIndex < phrase.length) {
            passwordElement.textContent = phrase[currentIndex];
            currentIndex++;
        } else {
            clearInterval(interval);
            passwordElement.classList.add('hidden');
            inputContainer.classList.remove('hidden');
        }
    }, 500); // Adjust the speed of the letter display here
});

function checkPhrase() {
    if (secretInput.value === phrase) {
        alert('Access Granted');  // Replace with actual logic for granting access
    }
}

// Function to alternate text
function alternateText() {
    centerText.textContent = textToggle ? 'CRY' : 'PLEASE';
    textToggle = !textToggle;
}

setInterval(alternateText, 2000);  // Change text every 2 seconds
