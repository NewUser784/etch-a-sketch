
function getUserInput() {
    return prompt("Squares per side, 100 max: ");
}

function newGrid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
    
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })

        gridContainer.appendChild(square);
    }

}

let gridContainer = document.querySelector(".grid-container");
let newGridBut = document.querySelector("button");
let userInput = 16;

newGridBut.addEventListener("click", () => {
    userInput = getUserInput();
    console.log(userInput);
});

newGrid();