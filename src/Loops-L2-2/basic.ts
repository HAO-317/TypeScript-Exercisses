//- Loop -for()

// document.getElementById('inputForm')!.addEventListener('submit', function(event: Event) {
//     event.preventDefault();

//     const num = (document.getElementById('numberInput')).value;
//     let output = "";

//     if (Number(num) < 0 || isNaN(Number(num))) {
//         output = "eine Zahl größer als 0!!!";
//     } else {
//         for (let i = 0; i < Number(num); i++) {
//             output += "o";
//         }
//     }

//     (document.getElementById('output')).innerText ="L"+ output +"p";
// });

//- forEach
document.getElementById('inputForm')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const num = (document.getElementById('numberInput')).value;
    let output = "";

    if (Number(num) < 0 || isNaN(Number(num))) {
        output = "eine Zahl größer als 0!!!";
    } else {
        Array.from({ length: Number(num) }).forEach(() => {
            output += "o";});
    }

    (document.getElementById('output')).innerText = "L" + output + "p";
});





//-Array.fill
// document.getElementById('inputForm')!.addEventListener('submit', function(event: Event) {
//     event.preventDefault();

//     const num = (document.getElementById('numberInput')).value;
//     let output = "";

//     if (Number(num) < 0 || isNaN(Number(num))) {
//         output = "eine Zahl größer als 0!!!";
//     } else {
//         output = Array(Number(num)).fill("o").join(""); 
//     }

//     (document.getElementById('output') ).innerText = "L" + output + "p";
// });

//- String-repeat()
// document.getElementById('inputForm')!.addEventListener('submit', function(event: Event) {
//     event.preventDefault();

//     const num = (document.getElementById('numberInput')).value;
//     let output = "";

//     if (Number(num) < 0 || isNaN(Number(num))) {
//         output = "eine Zahl größer als 0!!!";
//     } else {
//         output = "o".repeat(Number(num));
//     }

//     (document.getElementById('output')).innerText = "L" + output + "p";
// });

//- map

// document.getElementById('inputForm')!.addEventListener('submit', function(event: Event) {
//     event.preventDefault();

//     const num = (document.getElementById('numberInput')).value;
//     let output = "";

//     if (Number(num) < 0 || isNaN(Number(num))) {
//         output = "eine Zahl größer als 0!!!";
//     } else {
//         output = Array(Number(num)).fill("o").map(() => "o").join(""); 
//     }

//     (document.getElementById('output')).innerText = "L" + output + "p";
// });


//- while
// document.getElementById('inputForm')!.addEventListener('submit', function(event: Event) {
//     event.preventDefault();

//     const num = (document.getElementById('numberInput')).value;
//     let output = "";

//     if (Number(num) < 0 || isNaN(Number(num))) {
//         output = "eine Zahl größer als 0!!!";
//     } else {
//         let i = 0;
//         while (i < Number(num)) {
//             output += "o"; 
//             i++;
//         }
//     }

//     (document.getElementById('output')).innerText = "L" + output + "p";
// });
