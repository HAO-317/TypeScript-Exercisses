window.onload = () => {
    const button = document.querySelector("button");
    const form = document.getElementById("ageForm") as HTMLFormElement;

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); 
            calculateAge();
        });
    }
};

function calculateAge() {
    const birthYearInput = document.getElementById("birthYear") as HTMLInputElement;
    const birthYear = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    console.log("Eingegebenes Geburtsjahr:", birthYear);
    console.log("Aktuelles Jahr:", currentYear);

    const age = currentYear - birthYear;

    console.log("Berechnetes Alter:", age);

    const resultElement = document.getElementById("result") as HTMLParagraphElement;

    if (birthYear > currentYear) {
        resultElement.textContent = `${age} Jahre alt? Du bist noch nicht geboren!`;
    } else if (age >= 200) {
        resultElement.textContent = `Du bist ${age} Jahre alt. Du bist doch kein Mensch!`;
    } else if (age >= 150) {
        resultElement.textContent = `Du bist ${age} Jahre alt. Du hast neuen Rekorde der Menschenslebendauer geschafft!`;
    } else {
        resultElement.textContent = `Du bist ${age} Jahre alt.`;
    }
}
