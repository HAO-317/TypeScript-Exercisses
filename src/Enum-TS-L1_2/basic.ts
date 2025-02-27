// pizza.ts

enum PizzaSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    FamilieSize = "FamilieSize"
}

enum PizzaIngredients {
    Cheese = "Cheese",
    Onion = "Onion",
    Salami = "Salami",
    Mushrooms = "Mushrooms",
    Peperoni = "Peperoni",
    Peppers = "Peppers",
    Olives = "Olives",
    Arugula = "Arugula",
    Ham = "Ham"
}

type Pizza = {
    size: PizzaSize;
    ingredients: PizzaIngredients[];
}

// Beispiel-Pizzen mit deinen Daten
const basicCheese: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese]
};

const pepperoniPizza: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [
        PizzaIngredients.Cheese,
        PizzaIngredients.Peperoni,
        PizzaIngredients.Olives
    ]
};

const Texas: Pizza = {
    size: PizzaSize.Large,
    ingredients: [
        PizzaIngredients.Cheese,
        PizzaIngredients.Salami,
        PizzaIngredients.Peperoni,
        PizzaIngredients.Ham
    ]
};

const Italiano: Pizza = {
    size: PizzaSize.Large,
    ingredients: [
        PizzaIngredients.Cheese,
        PizzaIngredients.Peppers,
        PizzaIngredients.Arugula,
        PizzaIngredients.Ham
    ]
};


const familyXXL: Pizza = {
    size: PizzaSize.FamilieSize,
    ingredients: [
        PizzaIngredients.Cheese,
        PizzaIngredients.Mushrooms,
        PizzaIngredients.Peppers,
        PizzaIngredients.Arugula,
        PizzaIngredients.Onion
    ]
};


console.log("Basic Cheese:", basicCheese);
console.log("Pepperoni Pizza:", pepperoniPizza);
console.log("Texas:", Texas);
console.log("Italiano", Italiano);
console.log("Family XXL:", familyXXL);