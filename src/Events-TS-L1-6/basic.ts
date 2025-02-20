const selectInput = document.querySelector("select");
const outputPara = document.querySelector(".output");

selectInput?.addEventListener("change", getOption);

function getOption(event: Event) {
    event.preventDefault();
    if (selectInput && outputPara) {
        outputPara.innerHTML = `Sie haben ${selectInput.value} ausgewählt!`;
    }
}