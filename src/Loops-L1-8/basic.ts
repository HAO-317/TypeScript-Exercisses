let zahl: number = 2;

// do {
//     console.log(zahl); 
//     zahl += 2;         
// } while (zahl <= 20);  


let output: string = "";

do {
    output += zahl + "<br>";  
    zahl += 2; 
} while (zahl <= 20);

document.getElementById("output")!.innerHTML = output;


//- es gibt weitere Schreiben-Alternative:
// for-Schleife, while-Schleife, Array forEach, 
// map mit join( stringbasierte Ausgabe) und Rekursiver Ansatz