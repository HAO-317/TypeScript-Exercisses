const inputNumber = document.getElementById('inputNumber');
const doubleButton = document.getElementById('doubleButton');
const resultParagraph = document.getElementById('result');


function doubleNumber() {
  const number = parseFloat(inputNumber.value); 
  const doubledValue = number * 2; 
  resultParagraph.textContent = `Ergebnis: ${doubledValue}`; 
}

// 按钮-点击-事件监听器
doubleButton.addEventListener('click', doubleNumber);
