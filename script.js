
function createGrid() {
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

createGrid();