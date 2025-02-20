let bucketList = ['Bruce', 'Wayne', 'Superreich'];
let luckyNumbers = ['Farid', 'Christian', 'Sergio'];
let favoritePeople = ['Burger', 'Sushi', 'corn cheese balls'];

console.log(bucketList[0]);  
console.log(bucketList[1]); 
console.log(bucketList[2]);  

console.log(luckyNumbers[0]);  
console.log(luckyNumbers[1]); 
console.log(luckyNumbers[2]);  

console.log(favoritePeople[0]);  
console.log(favoritePeople[1]);  
console.log(favoritePeople[2]);  

document.getElementById('bucketList')!.innerHTML = `1. ${bucketList[0]} <br> 2. ${bucketList[1]} <br> 3. ${bucketList[2]}`;
document.getElementById('luckyNumbers')!.innerHTML = `1. ${luckyNumbers[0]} <br> 2. ${luckyNumbers[1]} <br> 3. ${luckyNumbers[2]}`;
document.getElementById('favoritePeople')!.innerHTML = `1. ${favoritePeople[0]} <br> 2. ${favoritePeople[1]} <br> 3. ${favoritePeople[2]}`;
