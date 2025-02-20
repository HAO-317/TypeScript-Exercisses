let bucketList:string[] = ["NY","Iceland", "Tokyo"]
let luckyNumbers:number[] = [3,7,17]
let favoritePeople: string[] = ["Miles","Elon","Mario"]

console.log(bucketList)
console.log(luckyNumbers)
console.log(favoritePeople)

function displayArray(id: string, array: any[]) {
  const element = document.getElementById(id);
  if (element) {
      element.innerHTML = array.map(item => `<p>${item}</p>`).join("");
  }
}

displayArray("bucketList", bucketList);
displayArray("luckyNumbers", luckyNumbers);
displayArray("favoritePeople", favoritePeople);