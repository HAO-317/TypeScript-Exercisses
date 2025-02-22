const getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

function myDrinks(){
    const sortedGetraenke = getraenke.sort();

    sortedGetraenke.forEach(drink => {
        console.log(drink)

    document.body.innerHTML += `<p>${drink}</p>` //+
    
    })
}
myDrinks()