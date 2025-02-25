let numbersToTen: number[] = [];
for (let i = 0; i <= 10; i++) {
    numbersToTen.push(i); 
}

console.log(numbersToTen);

const outputDiv = document.getElementById('output');
outputDiv.innerHTML = numbersToTen.join(', ');