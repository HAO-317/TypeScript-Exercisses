const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort((a, b) => a - b);
console.log('Aufsteigend sortiert:', numArray1);

numArray1.sort((a, b) => b - a);
console.log('Absteigend sortiert:', numArray1);


const aufsteigend = [...numArray1].sort((a, b) => a - b);

const absteigend = [...numArray1].sort((a, b) => b - a);

document.getElementById('aufsteigend')!.innerHTML = `<p>Aufsteigend sortiert: ${aufsteigend.join(', ')}</p>`;
document.getElementById('absteigend')!.innerHTML = `<p>Absteigend sortiert: ${absteigend.join(', ')}</p>`;