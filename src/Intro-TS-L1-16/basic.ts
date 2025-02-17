let score: number = 5 + 5 * 10;  
document.getElementById("output").innerHTML += 'Ergebnis (score): ' + score + '<br>';

let score2 = (5 + 5) * 10;  
document.getElementById("output").innerHTML += 'Ergebnis (score2): ' + score2 + '<br>';

let score3 = 0;  
score3 = score3 + 10;  
document.getElementById("output").innerHTML += 'Ergebnis (score3 - first increment): ' + score3 + '<br>';

score3 += 10;  
document.getElementById("output").innerHTML += 'Ergebnis (score3 - second increment): ' + score3 + '<br>';

let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;
zahl++;  
document.getElementById("output").innerHTML += 'increment: ' + zahl + '<br>';

zahl--;  
document.getElementById("output").innerHTML += 'dekrement: ' + zahl + '<br>';
