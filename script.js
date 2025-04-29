
function createGrid() {
    let square = document.createElement("div");
    square.classList.toggle("square");

    gridContainer.appendChild(square);
}

let gridContainer = document.querySelector(".grid-container");

createGrid();