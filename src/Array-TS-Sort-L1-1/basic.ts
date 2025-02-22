const languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

function sortAlphabetically(languages: string[]): string[] {
    return languages.sort();
}

console.log(sortAlphabetically(languages));


const europeanCountries: string[] = [
    "France",
    "Germany",
    "Sweden",
    "Great Britain",
    "Czech Republic",
    "Switzerland",
    "Danemark",
    "Holland",
    "Poland"
];

function sortContries(languages: string[]): string[] {
    return europeanCountries.sort();
}

console.log(sortContries(europeanCountries));


const sortedLanguages = sortAlphabetically(languages);
const sortedCountries = sortAlphabetically(europeanCountries);

document.getElementById('sorted-languages')!.innerText = sortedLanguages.join(", ");
document.getElementById('sorted-countries')!.innerText = sortedCountries.join(", ");