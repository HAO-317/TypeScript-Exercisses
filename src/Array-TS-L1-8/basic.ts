const lieblingsReiseZiele: string[] = ["Paris", "New York", "Tokyo", "Sydney"];

console.log(lieblingsReiseZiele);

lieblingsReiseZiele.splice(2, 0, "Beijing", "Shanghai");
console.log(lieblingsReiseZiele);

const removedCities: string[] = lieblingsReiseZiele.slice(2, 4); // Index 2 bis 4 (4 ist nicht eingeschlossen)
console.log(lieblingsReiseZiele);
console.log("Entfernte Reiseziele:", removedCities);