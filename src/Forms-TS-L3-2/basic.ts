function updateFontsSize() {
    const textInput = (document.getElementById("textInput") as HTMLInputElement).value || "Beispieltext";
    const fontSize = parseInt((document.getElementById("fontSizeRange") as HTMLInputElement).value, 10);
    const fontFamily = (document.getElementById("fontSelect") as HTMLSelectElement).value;

    const outputText = document.getElementById("outputText") as HTMLHeadingElement;
    
    if (outputText) {  
        outputText.innerHTML = textInput;
        outputText.style.fontSize = `${fontSize}px`; 
        outputText.style.fontFamily = fontFamily;   
    }

    console.log("Text: " + textInput);
    console.log("Schriftgröße: " + fontSize + "px");
    console.log("Schriftart: " + fontFamily);
}

const textInputElement = document.getElementById("textInput");
const fontSizeInputElement = document.getElementById("fontSizeRange");
const fontSelectElement = document.getElementById("fontSelect");

if (textInputElement) {
    textInputElement.addEventListener("input", updateFontsSize); 
}

if (fontSizeInputElement) {
    fontSizeInputElement.addEventListener("input", updateFontsSize); }

if (fontSelectElement) {
    fontSelectElement.addEventListener("change", updateFontsSize); 
}
