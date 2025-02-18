function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear(); 
    const alter = currentYear - birthYear; 
    return alter; 
}

const myAge = calculateAge(1990); 90
console.log("My Age: " + myAge); 

document.getElementById('ageResult').innerHTML = "My Age: " + myAge;


function calculateAgesDifferenz(birthYear1: number, birthYear2: number): number {
    const currentYear = new Date().getFullYear(); 
    const alter1 = currentYear - birthYear1; 
    const alter2 = currentYear - birthYear2; 
    const altersDifferenz = Math.abs(alter1 - alter2); //Math.abs用于返回一个数的绝对值
    return altersDifferenz; 
}

const altersDifferenz = calculateAgesDifferenz(1995, 1980);
console.log("Age Difference: " + altersDifferenz); 

document.getElementById('ageDifferenceResult').innerHTML = "Age Difference: " + altersDifferenz;


