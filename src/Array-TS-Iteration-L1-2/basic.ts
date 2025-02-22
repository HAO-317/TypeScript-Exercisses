const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upDrinks = drinks.map((drink) => drink.toUpperCase());

console.log(upDrinks)

drinks.map((drink)=> {
    console.log(`I like this ${drink}!`)
})

//alternativ

function convertToUpper(drink: string): string {
    return drink.toUpperCase();
  }
  
  function addLike(drink: string){
    console.log(`I like ${drink} so much!`);

    document.body.innerHTML += `<p>I like ${drink} so much!</p>`//+
  }
  
  const upperDrinks = drinks.map(convertToUpper);
  
  console.log(upperDrinks);
  
  drinks.map(addLike);

  