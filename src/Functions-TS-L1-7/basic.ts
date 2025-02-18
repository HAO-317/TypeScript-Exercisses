function multiplyByTwo(number: number): number {
    return number * 2;
  }
  
  const result = multiplyByTwo(8);
  console.log(result);  

  document.getElementById('result').textContent = 'Das Ergebnis ist: ' + result;
  