const inputNumber = document.getElementById("input-number");
const inputHolder = document.getElementById("input-holder");
const inputDate = document.getElementById("input-date");
const inputCvv = document.getElementById("input-cvv");
const submitButton = document.querySelector(".button");


const outputNum = document.querySelector(".output-num");
const fullName = document.querySelector(".full-name");
const date = document.querySelector(".date");
const outputWrapper = document.querySelector(".output-wrappe");

submitButton.addEventListener("click", (event: Event) => {
    event.preventDefault(); // 阻止表单默认提交

    const cardNumber = inputNumber.value;
    const cardHolder = inputHolder.value;
    const expiryDate = inputDate.value;
    const cvv = inputCvv.value;

    outputNum.textContent = formatCardNumber(cardNumber); 
    fullName.textContent = cardHolder.toUpperCase(); 
    date.textContent = formatExpiryDate(expiryDate); 

    addRainbowShadowEffect();
});

function formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/\d{4}(?=\d)/g, '$& ').trim();
}

function formatExpiryDate(date: string): string {

    const monthYear = date.split('-'); 
    const month = monthYear[1]; 
    const year = monthYear[0]; 

    return `${month}/${year.slice(2, 4)}`;
}

inputNumber.addEventListener('input', () => {
    inputNumber.value = inputNumber.value.replace(/\D/g, '').slice(0, 16); 
});

inputHolder.addEventListener('input', () => {
    inputHolder.value = inputHolder.value.replace(/[^a-zA-Z ]/g, ''); 
});

inputCvv.addEventListener('input', () => {
    inputCvv.value = inputCvv.value.replace(/\D/g, '').slice(0, 3); 
});


function addRainbowShadowEffect() {

    outputWrapper.classList.add('rainbow-shadow');
    
    setTimeout(() => {
        outputWrapper.classList.remove('rainbow-shadow');
    }, 25000); 
}
