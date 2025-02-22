let satz = "Peter Piper picked a peck of pickled peppers. ";
let suchPiper = "Piper";
let suchPiper2 = "piper";

console.log(satz.includes(suchPiper));
console.log(satz.includes(suchPiper2)); 

console.log(satz.toLowerCase().includes(suchPiper2.toLowerCase()));

let suchPeck = "peck";

console.log(satz.includes(suchPeck, 5)); 
console.log(satz.includes(suchPeck, 25)); 
