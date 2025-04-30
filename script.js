
function getUserInput() {

    let userInput = Number(prompt("Squares per side, 100 max: "));

    while (isNaN(userInput) || typeof userInput !== 'number' || userInput <= 0 || userInput > 99) {
        userInput = Number(prompt("ERROR - Introduce a valid value: "));
    }

    return userInput;
}

function deleteGrid() {
    let originalLength = squares.length;

    for (let i = 0; i < squares.length; i++) {
        gridContainer.removeChild(squares[i]);
    }

    for (let i = 0; i < originalLength; i++) {
        squares.pop();
    }
}

function newGrid(gridSize) {
    let newWidthHeight = String((800 / gridSize)) + "px";

    gridSize *= gridSize;

    for (let i = 0; i < gridSize; i++) {
        let opacity = 0;
        let square = document.createElement("div");
        square.classList.toggle("square");
    
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
            square.style.opacity = String(opacity += 10) + "%";
        })

        square.style.width = newWidthHeight;
        square.style.height = newWidthHeight;

        squares[i] = square;

        gridContainer.appendChild(squares[i]);
    }

}

let gridContainer = document.querySelector(".grid-container");
let newGridBut = document.querySelector("button");
let userInput = 16;
let squares = [];

newGrid(userInput);

newGridBut.addEventListener("click", () => {
    deleteGrid();
    newGrid(getUserInput());
});


