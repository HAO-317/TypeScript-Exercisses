let friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

console.log("%c -----for-schleife----", "color: red");
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
    ;
  }

console.log("%c -----of-schleife----", "color: red");
for (let name of friendNames){
    console.log(name);
}