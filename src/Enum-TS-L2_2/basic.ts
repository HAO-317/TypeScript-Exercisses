enum ClothingColor {
    Yellow = "#FFC107",  
    Orange = "#FF5722",  
    Pink = "#E91E63",    
    Blue = "#2196F3",    
    Purple = "#9C27B0",  
    Grey = "#9E9E9E"    
}


function createColorButtons(){

const container = document.getElementById('output') as HTMLDivElement;
    
Object.values(ClothingColor)
.filter(value => typeof value === 'string')
.forEach((hexColor) => {
    const button = document.createElement('button');
            
    button.style.backgroundColor = hexColor;
    button.style.width = '120px';
    button.style.height = '50px';
    button.style.borderRadius = '5px';
    button.style.margin = '5px';
    button.style.border = '2px solid black';
    button.style.cursor = 'pointer';
            
    const colorName = Object.keys(ClothingColor)
        .find(key => ClothingColor[key as keyof typeof ClothingColor] === hexColor);
        button.textContent = colorName || '';
        button.addEventListener('click', () => {
            console.log(`Gewählte Farbe: ${colorName} (${hexColor})`);
            });
        container.appendChild(button);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    createColorButtons();
});