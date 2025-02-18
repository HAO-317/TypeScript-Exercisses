function showHero(heroName: string, heroPower: string, heroEnemy: string){

    let nameOutput: string;
    let powerOutput: string;
    let enemyOutput: string;

    nameOutput = `Mein Lieblingsheld ist: ${heroName}`;
    powerOutput = `Er hat die Fähigkeit: ${heroPower}`;
    enemyOutput = `Sein größter Gegner ist: ${heroEnemy}`;

    console.log(nameOutput + " " + powerOutput + " " + enemyOutput);

    document.getElementById("output").innerHTML = `${nameOutput}<br>${powerOutput}<br>${enemyOutput}`;
}

showHero("Jesus", "SHeilung, Wunder, Unsterblichkeit, Empathie, Fliegen.", "Satan Luzifer");

