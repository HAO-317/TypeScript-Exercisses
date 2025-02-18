function returnOne(): number {
    return 1;
}

let x: number = 1;
let y: number = returnOne();

if (x === y) {
    // console.log("Wird das gedruckt?");
    document.getElementById('output')!.innerText = "Wird das gedruckt?";
}

returnOne()
