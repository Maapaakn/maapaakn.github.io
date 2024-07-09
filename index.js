const passwordElement = document.getElementById('password');
const inputContainer = document.getElementById('input-container');
const secretInput = document.getElementById('secret-input');
const centerText = document.getElementById('center-text');
const linkContainer = document.getElementById('link-container');
const dynamicLink = document.getElementById('dynamic-link');
const phrase = 'PRUEBA';  // Reemplaza esto con la frase que deseas mostrar
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
            secretInput.focus();
        }
    }, 500); // Ajusta la velocidad de la visualización de letras aquí
});

function checkPhrase() {
    if (secretInput.value === phrase) {
        linkContainer.classList.remove('hidden');  // Muestra el enlace dinámico
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkPhrase();
    }
}

// Función para alternar texto
function alternateText() {
    centerText.textContent = textToggle ? 'cry' : 'please';
    textToggle = !textToggle;
}

setInterval(alternateText, 2000);  // Cambia el texto cada 2 segundos
