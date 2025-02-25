let i: number = 1;

// do {
//   console.log(`The number ${i}`);
//   i++;
// } while (i <= 5);
let output = "";
do {
  output += `The number ${i}<br>`;
  i++;
} while (i <= 5);

document.getElementById("output").innerHTML = output;