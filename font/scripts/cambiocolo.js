const originalColors = {
    '--color-1': 'rgb(34, 40, 49)',   /* color oscuro */
    '--color-2': 'rgb(238, 238, 238)', /* color claro */
    '--color-3': 'rgb(118, 171, 174)', /* color intermedio */
    '--color-4': 'rgb(49, 54, 63)',    /* otro color oscuro */
    '--color-5': 'rgb(0, 0, 0)',       /* negro */
    '--color-6': 'rgba(128, 128, 128, 0.489)' /* color semi-transparente */
};

const newColors = {
    '--color-1': 'rgb(238, 238, 238)',   /* color claro */
    '--color-2': 'rgb(34, 40, 49)',      /* color oscuro */
    '--color-3': 'rgb(63, 86, 152)',     /* color intermedio */
    '--color-4': 'rgb(156, 163, 176)',   /* otro color intermedio */
    '--color-5': 'rgb(34, 40, 49)',      /* otro color oscuro derivado de --color-15 */
    '--color-6': 'rgba(128, 128, 128, 0.489)' /* color semi-transparente */
};

let usingOriginalColors = true;

const changeColorsButton = document.getElementById('change-colors');
const changeColorsButtonIcon = changeColorsButton.querySelector('img');

document.getElementById('change-colors').addEventListener('click', function() {
    const colors = usingOriginalColors ? newColors : originalColors;
    for (const [key, value] of Object.entries(colors)) {
        document.documentElement.style.setProperty(key, value);
    }
    usingOriginalColors = !usingOriginalColors;
    // Cambiar el icono del botón
    changeColorsButtonIcon.src = usingOriginalColors ? 'recursos/claro.png' : 'recursos/obscuro.png';
});