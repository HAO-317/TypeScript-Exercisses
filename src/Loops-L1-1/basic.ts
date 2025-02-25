for (let i = 1; i <= 10; i++) {
    console.log(`Hello World `+ [i]);
    let output = document.getElementById('output');
    output.innerHTML += `Hello World + ${i}<br>`;
}

