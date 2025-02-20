function changeColors(backgroundColor: string, textColor: string){
    document.body.style.backgroundColor = backgroundColor;
    const h1 = document.querySelector("h1");
    const h3 = document.querySelector("h3") ;
    const a = document.querySelector("a");
    h3.style.color =  h1.style.color =  a.style.color = textColor;
}

function ball1Function(){
    changeColors("red", "white");
}

function ball2Function(){
    changeColors("blue", "yellow");
}

function ball3Function(){
    changeColors("purple", "orange");
}

function ball4Function(){
    changeColors("orange", "blue");
}


document.getElementById("ball1")?.addEventListener("click", ball1Function);
document.getElementById("ball2")?.addEventListener("click", ball2Function);
document.getElementById("ball3")?.addEventListener("click", ball3Function);
document.getElementById("ball4")?.addEventListener("click", ball4Function);
