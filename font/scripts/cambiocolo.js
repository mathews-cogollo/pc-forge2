const originalColors = { 
    '--color-1': 'rgb(255, 87, 34)',
    '--color-15': '255, 87, 34',
    '--color-2': 'rgb(255, 235, 59)',
    '--color-3': 'rgb(76, 175, 80)',
    '--color-4': 'rgb(33, 33, 33)'
    
};

const newColors = {
    '--color-1': 'rgb(34, 40, 49)',
    '--color-15': '34, 40, 49',
    '--color-2': 'rgb(238, 238, 238)',
    '--color-3': 'rgb(118, 171, 174)',
    '--color-4': 'rgb(49, 54, 63)'
   
};

let usingOriginalColors = true;

document.getElementById('change-colors').addEventListener('click', function() {
    const colors = usingOriginalColors ? newColors : originalColors;
    for (const [key, value] of Object.entries(colors)) {
        document.documentElement.style.setProperty(key, value);
    }
    usingOriginalColors = !usingOriginalColors;
});