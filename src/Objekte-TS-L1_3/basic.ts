type Apple = {
    color: string;
    size: string;
    isSweet: boolean; // Neue Eigenschaft hinzugefügt
};

const redApple: Apple = { color: 'red', size: 'big', isSweet: true };
const greenApple: Apple = { color: 'green', size: 'small', isSweet: false };
const yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: true };
 
const apples: Apple[] = [redApple, greenApple, yellowApple];


// For-Schleife Größen
for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}

// forEach Farben
apples.forEach((apple) => {
  console.log(apple.color);
});

// Anzahl
console.log('Anzahl der Äpfel:', apples.length);

// Neues pinkApple hinzufügen
const pinkApple: Apple = { color: 'pink', size: 'medium', isSweet: true };
apples.push(pinkApple);

console.log(...apples)
console.log('Anzahl der Äpfel:', apples.length);