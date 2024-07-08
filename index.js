const passwordElement = document.getElementById('password');
const inputContainer = document.getElementById('input-container');
const secretInput = document.getElementById('secret-input');
const phrase = 'YOURPHRASE';  // Replace this with the phrase you want to show
let currentIndex = 0;

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

secretInput.addEventListener('input', () => {
    if (secretInput.value === phrase) {
        alert('Access Granted');  // Replace with actual logic for granting access
    }
});
