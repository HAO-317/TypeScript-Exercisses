const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Version1
function printEvenNumbers(arr: number[]): number[] {
return arr.filter(function(num) {
return num % 2 === 0;
});
  }
function printOddNumbers(arr: number[]): number[] {
return arr.filter(function(num) {
return num % 2 !== 0;
});
}
  
const evenNumbers = printEvenNumbers(zahlen);
const oddNumbers = printOddNumbers(zahlen);
  
console.log("Gerade Zahlen:", evenNumbers);
console.log("Ungerade Zahlen:", oddNumbers);
  

console.log("** mit Arrow - Unten **")

function printEvenNumbers2(arr: number[]): number[] {
return arr.filter((num) => num % 2 === 0);
}

function printOddNumbers2(arr: number[]): number[] {
return arr.filter((num) => num % 2 !== 0);
}

const evenNumbers2 = printEvenNumbers2(zahlen);
const oddNumbers2 = printOddNumbers2(zahlen);

console.log("Gerade Zahlen:", evenNumbers2);
console.log("Ungerade Zahlen:", oddNumbers2);

document.getElementById("evenNumbers").textContent = evenNumbers2.join(", ");
document.getElementById("oddNumbers").textContent = oddNumbers2.join(", ");
