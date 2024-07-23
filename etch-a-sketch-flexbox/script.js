const container = document.querySelector(".container");

let gridSize = 4;

let cellSize = 500 / gridSize;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        cell.style.backgroundColor = "White";
        cell.style.border = "1px solid black";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    }
}

createGrid(4);