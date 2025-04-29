
function createGrid() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
    
        gridContainer.appendChild(square);
    }

}

let gridContainer = document.querySelector(".grid-container");

createGrid();