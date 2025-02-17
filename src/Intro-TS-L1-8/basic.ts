// let x: number = 20;
// let y: number = 30;

// console.log("x + y = ", x + y);

// console.log("x - y = ", x - y);

// console.log("y - x = ", y - x);

// console.log("x * y = ", x * y);

// console.log("x / y = ", x / y);

// let z: number = 10;
// let resultOne: number = (x * y) / z;
// console.log("resultOne = ", resultOne);

// let a: number = 15;
// let b: number = 9;

// console.log("a % b = ", a % b);

// let c: number = 20;
// let resultTwo: number = (a + b) * c;
// console.log("resultTwo = ", resultTwo);

// a++;
// console.log("a after increment = ", a);

// b--;
// console.log("b after decrement = ", b);

// let resultThree: number = a - b;
// console.log("resultThree = ", resultThree);

// console.log("resultOne % resultTwo = ", resultOne % resultTwo);


let x: number = 20;
let y: number = 30;

let output = document.getElementById("output");

output!.innerHTML += `<p>x + y = ${x + y}</p>`;

output!.innerHTML += `<p>x - y = ${x - y}</p>`;

output!.innerHTML += `<p>y - x = ${y - x}</p>`;

output!.innerHTML += `<p>x * y = ${x * y}</p>`;

output!.innerHTML += `<p>x / y = ${x / y}</p>`;

let z: number = 10;
let resultOne: number = (x * y) / z;
output!.innerHTML += `<p>resultOne = (x * y) / z = ${resultOne}</p>`;

let a: number = 15;
let b: number = 9;

output!.innerHTML += `<p>a % b = ${a % b}</p>`;

let c: number = 20;
let resultTwo: number = (a + b) * c;
output!.innerHTML += `<p>resultTwo = (a + b) * c = ${resultTwo}</p>`;

a++;
output!.innerHTML += `<p>a after increment = ${a}</p>`;

b--;
output!.innerHTML += `<p>b after decrement = ${b}</p>`;

let resultThree: number = a - b;
output!.innerHTML += `<p>resultThree = a - b = ${resultThree}</p>`;

output!.innerHTML += `<p>resultOne % resultTwo = ${resultOne % resultTwo}</p>`;
